const createUserSchema = {
  body: {
    type: "object",
    required: ["name", "email"],
    properties: {
      name: { type: "string", minLength: 2 },
      email: { type: "string", format: "email" },
    },
  },
};

export { createUserSchema };
