export default {
  Query: {
    task: async (parent, { id }, { models }) =>
      models.Tasks.findOne({ where: { id } }),
    tasks: async (parent, args, { models }) => models.Tasks.findAll()
  },
  Mutation: {
    createTask: async (parent, args, { models }) => {
      return true;
    },
    updateTask: async (parent, args, { models }) => {
      return true;
    }
  }
};
