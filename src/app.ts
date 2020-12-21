import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { getConnection } from './utils/connectionDb'
import config from './config'
import { createSchema } from './utils/createSchema';

const bootstrap = async () => {
    await getConnection()

    const schema = await createSchema()

    const apolloServer = new ApolloServer({ schema })

    const app = express()

    apolloServer.applyMiddleware({ app })

    await app.listen(config.server.port)
}

bootstrap()