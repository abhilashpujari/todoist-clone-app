export default {
  Query: {
    getProject: async (parent, { id }, { models }) => {
      let userId = 1;
      let project = models.Projects.findOne({ where: { id } });

      if (!project) {
        throw Error("Project doesn't exists");
      }

      if (taprojectsk.userId !== userId) {
        throw Error("You don't access to this resource");
      }

      return project;
    },
    getProjects: async (parent, args, { models }) =>
      models.Projects.findAll({
        where: {
          userId
        }
      })
  },
  Mutation: {
    createProject: async (parent, { input }, { models }) => {
      const { Projects } = models;
      let { name } = input;
      let userId = 1;

      try {
        let project = await Projects.findOne({ where: { name, userId } });

        if (project) {
          throw Error(
            "Project with same name already existing please choose the another name for it"
          );
        }

        project = await Projects.create({ name, userId });

        return project;
      } catch (error) {
        throw Error(error);
      }
    },
    updateProject: async (parent, args, { models }) => {
      const { Projects } = models;

      let { name } = input;
      let userId = 1;

      try {
        let project = await Projects.findOne({ where: { name, userId } });

        if (!project) {
          throw Error("Project doesn't exists");
        }

        if (project.userId !== userId) {
          throw Error("Your are not authorized to access this resource");
        }

        await project.update({ input });
        return project;
      } catch (error) {
        throw Error(error);
      }
    }
  }
};
