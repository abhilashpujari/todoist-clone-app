export default {
  Query: {
    getProject: async (parent, { input }, { models }) => {
      let userId = 1;
      let { id } = input;
      let { Projects } = models;

      try {
        let project = await Projects.findOne({ where: { id } });

        if (!project) {
          throw Error("Project doesn't exists");
        }

        if (project.userId !== userId) {
          throw Error("You don't access to this resource");
        }

        return project;
      } catch (error) {
        throw new Error(error);
      }
    },
    getProjects: async (parent, args, { models }) => {
      let userId = 1;
      return await models.Projects.findAll({
        where: {
          userId
        }
      });
    }
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
    deleteProject: async (parent, args, { models }) => {
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

        await project.delete();
        return true;
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
