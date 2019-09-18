import { ApolloServer } from "apollo-server-express";
import express from "express";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import dotenv from "dotenv";
import path from "path";
import models from "./models";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const typeDefs = mergeTypes(
  fileLoader(path.join(__dirname, "./graphql/types"))
);

const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, "./graphql/resolvers"))
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

server.applyMiddleware({ app });

models.sequelize
  .sync({
    force: false
  })
  .then(() => {
    app.listen({ port: PORT }, () =>
      console.log(
        `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
      )
    );
  });
