export default `

  input getTaskInput {
    id: Int!
  }

  input createTaskInput {
    projectId: Int!
    dueDate: String!
    description: String!
  }

  input deleteTaskInput {
    id: Int!
  }

  input updateTaskInput {
    id: Int!
    dueDate: String
    description: String
  }

  type Task {
    id: Int!
    description: String!
    dueDate: String!
  }

  type Query {
    getTask(input: getTaskInput): Task
    getTasks: [Task!]
  }

  type Mutation {
    createTask(input: createTaskInput): Task
    deleteTask(input: deleteTaskInput): Boolean
    updateTask(input: updateTaskInput): Task
  }
`;
