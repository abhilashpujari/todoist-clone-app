export default {
  Query: {
    getProject: (parent, { id }, { models }) =>
      models.Projects.findOne({ where: { id } }),
    allProjects: (parent, args, { models }) => models.Projects.findAll()
  }
};
