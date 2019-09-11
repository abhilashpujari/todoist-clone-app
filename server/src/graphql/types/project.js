export default `

  type Project {
    id: Int!
    name: String!
    type: String!
  }

  type Query {
    getProject(id: Int!): Project!
    allProjects: [Project!]!
  }

  type Mutation {
    createProject(name: String!, type: String!): Boolean!
    updateProject(name: String!): Boolean!
  }
`;
