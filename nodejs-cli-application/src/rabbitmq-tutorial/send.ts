/* eslint-disable max-len,no-console */
import amqplib from 'amqplib'
import { ObjectId } from 'mongodb'

const mainSend = async () => {
  let mqConnection: amqplib.Connection | null = null
  let mqChannel: amqplib.Channel | null = null
  try {
    mqConnection = await amqplib.connect('amqp://localhost:5672')
    mqChannel = await mqConnection.createChannel()
    const queueName = 'test.queue'
    const resultAssertQueue = await mqChannel.assertQueue(queueName)
    console.log({ resultAssertQueue })

    const message = {
      id: new ObjectId(),
      name: 'Kind Person',
      publishedAt: new Date(),
      type: 3,
    }
    // const message = 'what happens if it is just string'
    // const message = 777
    const resultSendToQueue = await mqChannel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)))
    console.log({ resultSendToQueue })
  } catch (err) {
    console.error(err)
  } finally {
    // mqChannel?.close()
    // mqConnection?.close()
  }
}

mainSend()
  .catch((err) => console.error(err))
  .finally(() => console.log('- THE END -'))
