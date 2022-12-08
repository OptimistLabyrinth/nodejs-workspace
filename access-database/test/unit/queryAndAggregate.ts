import mongoose from 'mongoose'

interface IUser {
  name: string,
  age: number
}
const UserSchema = new mongoose.Schema<IUser>({
  name: String,
  age: Number,
})

type GenresType = 'ACTION' | 'SF' | 'CRIME' | 'DRAMA' | 'MUSIC' | 'ROMANCE'
interface IMovie {
  title: string
  year: number
  price: number
  category: GenresType[]
}
const MovieSchema = new mongoose.Schema<IMovie>({
  title: String,
  year: Number,
  price: Number,
  category: { type: [ String ] },
})

describe('pagination 테스트', () => {
  let connection: mongoose.Connection
  let User: mongoose.Model<IUser>
  let Movie: mongoose.Model<IMovie>

  const saveUsers = async () => {
    const userData: IUser[] = [
      {
        name: 'hello world',
        age: 17,
      },
      {
        name: 'world hello',
        age: 28,
      },
      {
        name: 'goodbye world',
        age: 33,
      },
      {
        name: 'world goodbye',
        age: 45,
      },
    ]
    const usersToSave = userData
      .map((userObject) => {
        const user = new User()
        user.name = userObject.name
        user.age = userObject.age
        return user
      })
      .map((user) => user.save())
    await Promise.all(usersToSave)
  }

  const saveMovies = async () => {
    const movieData: IMovie[] = [
      {
        title: 'Terminator 2',
        year: 1991,
        price: 100,
        category: [ 'SF', 'ACTION' ],
      },
      {
        title: 'Salt',
        year: 2010,
        price: 150,
        category: [ 'ACTION', 'CRIME' ],
      },
      {
        title: 'Dirty Dancing',
        year: 1987,
        price: 70,
        category: [ 'DRAMA', 'MUSIC', 'ROMANCE' ],
      },
    ]
    const moviesToSave = movieData
      .map((data) => {
        const movie = new Movie()
        movie.title = data.title
        movie.year = data.year
        movie.price = data.price
        movie.category = data.category
        return movie
      })
      .map((movie) => movie.save())
    await Promise.all(moviesToSave)
  }

  beforeAll(async () => {
    mongoose.set('debug', true)

    /**
     * after setting up docker instance
     *
     * $ docker exec -it mongo0 mongo
     * >  rs.initiate(
     *        {
     *           _id: "rs0",
     *           version: 1,
     *           members: [
     *              { _id: 0, host : "mongo0:27017" },
     *              { _id: 1, host : "mongo1:27018" },
     *              { _id: 2, host : "mongo2:27019" }
     *           ]
     *        }
     *     )
     */
    await mongoose.connect('mongodb://localhost:27017,localhost:27018,localhost:27019/test')
    connection = mongoose.connection
    console.dir({ 'connection.config': connection.config })
    User = connection.model('User', UserSchema)
    Movie = mongoose.model('Movie', MovieSchema)
    await Promise.all([
      saveUsers(),
      saveMovies(),
    ])
  })

  afterAll(async () => {
    const collections = await connection.db.listCollections().toArray()
    const dropCollectionRequests = collections
      .map((collection) => collection.name)
      .map((name) => connection.db.dropCollection(name))
    await Promise.all(dropCollectionRequests)
    await connection.destroy()
  })

  it('1 + 1 = 2', () => {
    expect(1 + 1).toBe(2)
  })

  it('mongoose query', async () => {
    // act
    const result = await User.find()
      .where('name').regex(/hello/i)
      .where('age').gt(20)
      .select([ 'name', 'age' ])
    // assert
    expect(result).toBeTruthy()
  })

  it('mongoose aggregate', async () => {
    // act
    const result = await User.aggregate([
      { $match: { age: { $gt: 20 } } },
      // { $match: { name: /hello/i } },
      { $sort: { age: -1 } },
      { $project: { name: 1, age: 1 } },
    ])
    // assert
    console.log(JSON.stringify(result, null, 2))
    expect(result).toBeTruthy()
  })

  it('mongoose aggregate using facet', async () => {
    // act
    const result = await Movie.aggregate([
      {
        $facet: {
          byCategory: [
            { $unwind: '$category' },
            { $sortByCount: '$category' },
          ],
          docs: [
            {
              $match: {
                title: /a/i,
                price: { $gte: 100 },
              },
            },
            {
              $sort: {
                year: -1,
                price: -1,
              },
            },
          ],
        },
      },
    ])
    // assert
    console.log(JSON.stringify(result, null, 2))
    expect(Array.isArray(result)).toBeTruthy()
  })
})
