export default `

  input getTaskInput {
    id: Int!
  }

  input createTaskInput {
    name: String!
    projectId: Int!
    dueDate: String!
    description: String!
  }

  input updateTaskInput {
    name: String
    dueDate: String
    description: String
  }

  type Task {
    id: Int!
    description: String!
    dueDate: String!
  }

  type Query {
    getTask(input: getTaskInput): Task!
    getTasks: [Task!]!
  }

  type Mutation {
    createTask(input: createTaskInput): Task!
    updateTask(input: updateTaskInput): Task!
  }
`;
