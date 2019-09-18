export default {
  Mutation: {
    login: async (parent, { email, password }, { models }) => {
      const user = await models.Users.findOne({ where: { email } });

      if (!user) {
        throw new Error("Email or password is incorrect");
      }

      let isPasswordValid = await user.comparePassword(password);
      if (isPasswordValid) {
        return user;
      } else {
        throw new Error("Email or password is incorrect");
      }
    },
    register: async (parent, { email, password }, { models }) => {
      const user = await models.Users.findOne({ where: { email } });

      if (user) {
        throw new Error("User already exists");
      }

      const newUser = await models.Users.create({
        email,
        password
      });

      return newUser;
    }
  }
};
