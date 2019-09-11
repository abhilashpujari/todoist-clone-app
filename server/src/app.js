import { ApolloServer } from "apollo-server-express";
import express from "express";
import dotenv from "dotenv";
import models from "./models";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const { typeDefs, resolvers } = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

models.sequelize.sync({}).then(() => {
  app.listen({ port: PORT }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
});
