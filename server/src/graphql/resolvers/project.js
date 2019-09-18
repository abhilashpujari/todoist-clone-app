export default {
  Query: {
    project: async (parent, { id }, { models }) =>
      models.Projects.findOne({ where: { id } }),
    projects: async (parent, args, { models }) => models.Projects.findAll()
  },
  Mutation: {
    createProject: async (parent, args, { models }) => {
      return true;
    },
    updateProject: async (parent, args, { models }) => {
      return true;
    }
  }
};
