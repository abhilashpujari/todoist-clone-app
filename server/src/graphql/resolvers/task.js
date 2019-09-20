export default {
  Query: {
    getTask: async (parent, { id }, { models }) =>
      models.Tasks.findOne({ where: { id } }),
    getTasks: async (parent, args, { models }) => models.Tasks.findAll()
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
