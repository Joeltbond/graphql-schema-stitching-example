import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: resolvers as any,
  context: request => ({
    ...request,
    db: prisma
  })
})

server.start(() =>
  console.log(`Server is running on localhost:${process.env.PORT}`)
)
