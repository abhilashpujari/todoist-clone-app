export default `

  type Project {
    id: Int!
    name: String!
    type: String!
  }

  type Query {
    project(id: Int!): Project!
    projects: [Project!]!
  }

  type Mutation {
    createProject(name: String!, type: String!): Boolean!
    updateProject(name: String!): Boolean!
  }
`;
