export default `

  input loginInput {
    email: String!
    password: String!
  }

  input registerInput {
    email: String!
    password: String!
  }

  type User {
    id: Int!
    firstName: String
    lastName: String
    email: String!
  }

  type Mutation {
    register(input: registerInput): User!
    login(input: loginInput): User!
  }
`;
