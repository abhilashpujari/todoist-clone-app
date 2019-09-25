import { ApolloServer, ApolloError } from "apollo-server-express";
import express from "express";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import dotenv from "dotenv";
import path from "path";
import models from "./models";
import logger from "./utils/logger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const typeDefs = mergeTypes(
  fileLoader(path.join(__dirname, "./graphql/types"))
);

const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, "./graphql/resolvers"))
);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers["x-auth-token"] || "";

    return { models };
  },
  formatError: error => {
    logger.error(error.message);

    if (error.message.startsWith("Database Error: ")) {
      return new Error("Internal server error");
    }

    if (error instanceof ApolloError) {
      return error;
    }

    return new Error("Internal server error");
  }
});

apolloServer.applyMiddleware({ app });

models.sequelize
  .sync({
    force: false
  })
  .then(() => {
    app.listen({ port: PORT }, () => {
      console.log(
        `🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
      );
    });
  });
