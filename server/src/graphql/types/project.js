export default `

  input getProjectInput {
    id: Int!
  }

  input createProjectInput {
    name: String!
    type: String!
  }

  input updateProjectInput {
    name: String
  }

  type Project {
    id: Int!
    name: String!
    type: String!
  }

  type Query {
    getProject(input: getProjectInput): Project!
    getProjects: [Project!]!
  }

  type Mutation {
    createProject(input: createProjectInput): Project!
    updateProject(input: updateProjectInput): Project!
  }
`;
