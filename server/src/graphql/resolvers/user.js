export default {
  Mutation: {
    login: (parent, args, { models }) => {
      return true;
    },
    register: async (parent, { email, password }, { models }) => {
      const user = await models.Users.findOne({ email });

      if (user) {
        throw new Error("User already exits");
      }

      const newUser = await models.Users.create({
        email,
        password
      });

      console.log(newUser);
      return newUser;
    }
  }
};
