export default {
  Query: {
    project: (parent, { id }, { models }) =>
      models.Projects.findOne({ where: { id } }),
    projects: (parent, args, { models }) => models.Projects.findAll()
  },
  Mutation: {
    createProject: (parent, args, { models }) => {
      return true;
    },
    updateProject: async (parent, args, { models }) => {
      return true;
    }
  }
};
