export default {
  Query: {
    getTask: async (parent, { input }, { models }) => {
      let userId = 1;
      let { id } = input;
      let { Tasks } = models;
      try {
        let task = await Tasks.findOne({ where: { id } });

        if (!task) {
          throw Error("Task doesn't exists");
        }

        console.log(task.userId);
        if (task.userId !== task.userId) {
          throw Error("You don't access to this resource");
        }

        return task;
      } catch (error) {
        throw Error(error);
      }
    },
    getTasks: async (parent, args, { models }) => {
      let userId = 1;
      return await models.Tasks.findAll({
        where: {
          userId
        }
      });
    }
  },
  Mutation: {
    createTask: async (parent, { input }, { models }) => {
      const { Tasks, Projects } = models;
      let { description, projectId } = input;
      let userId = 1;

      try {
        let project = await Projects.findOne({ where: { id: projectId } });

        if (!project) {
          throw Error("Project doesn't exists");
        }

        if (project.userId !== userId) {
          throw Error("You don't access to this resource");
        }

        let task = await Tasks.create({ description, userId, projectId });

        return task;
      } catch (error) {
        throw Error(error);
      }
    },
    updateTask: async (parent, { input }, { models }) => {
      const { Tasks, Projects } = models;
      let { id } = input;

      let task = await Tasks.findOne({ where: { id } });

      if (!task) {
        throw Error("Task doesn't exists");
      }

      if (task.userId !== userId) {
        throw Error("You don't access to this resource");
      }

      await task.update({ input });

      return task;
    }
  }
};
