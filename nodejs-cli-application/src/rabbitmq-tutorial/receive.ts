/* eslint-disable no-console */
import amqplib from 'amqplib'

const mainReceive = async () => {
  let mqConnection: amqplib.Connection | null = null
  let mqChannel: amqplib.Channel | null = null
  try {
    mqConnection = await amqplib.connect('amqp://localhost:5672')
    mqChannel = await mqConnection.createChannel()
    const queueName = 'test.queue'
    const resultAssertQueue = await mqChannel.assertQueue(queueName)
    console.log({ resultAssertQueue })

    const resultConsume = await mqChannel.consume(queueName, (msg) => {
      if (!msg) {
        throw new Error('message === null')
      }
      console.log({
        msg,
        content: {
          toJSON: msg.content.toJSON(),
          toString: msg.content.toString(),
        },
      })
      const parsed = JSON.parse(msg.content.toString())
      console.log(parsed)
      mqChannel?.ack(msg)
    })
    console.log({ resultConsume })
  } catch (err) {
    console.error(err)
  } finally {
    // mqChannel?.close()
    // mqConnection?.close()
  }
}

mainReceive()
  .catch((err) => console.error(err))
  .finally(() => console.log('- THE END -'))
