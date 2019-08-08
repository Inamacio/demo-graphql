import path from 'path';
import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
import resolvers from './resolvers';

async function start() {
  mongoose.connect('mongodb://localhost:27017/graphqlmock', {
    useNewUrlParser: true,
  });

  const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, '../src/schema.graphql'),
    resolvers,
  });

  server.start();
  console.log('http://localhost:4000');
}

start();
