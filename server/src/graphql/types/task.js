export default `

  type Task {
    id: Int!
    description: String!
    dueDate: String!
  }

  type Query {
    task(id: Int!): Task!
    tasks: [Task!]!
  }

  type Mutation {
    createTask(name: String!, type: String!): Boolean!
    updateTask(name: String!): Boolean!
  }
`;
