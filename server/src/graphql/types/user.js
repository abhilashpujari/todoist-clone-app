export default `
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
  }
  type Mutation {
    register(email: String!, password: String!): Boolean!
    login(email: String!, password: String!): Boolean!
  }
`;
