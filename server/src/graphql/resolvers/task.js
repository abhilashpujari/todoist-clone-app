export default {
  Query: {
    task: (parent, { id }, { models }) =>
      models.Tasks.findOne({ where: { id } }),
    tasks: (parent, args, { models }) => models.Tasks.findAll()
  },
  Mutation: {
    createTask: (parent, args, { models }) => {
      return true;
    },
    updateTask: async (parent, args, { models }) => {
      return true;
    }
  }
};
