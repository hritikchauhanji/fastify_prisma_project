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

const getUsersSchema = {
  querystring: {
    type: "object",
    properties: {
      page: { type: "integer", minimum: 1, default: 1 },
      limit: { type: "integer", minimum: 1, maximum: 100, default: 10 },
      search: { type: "string" },
    },
  },
};

const getUserByIdSchema = {
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: { type: "integer", minimum: 1 },
    },
  },
};

export { createUserSchema, getUsersSchema, getUserByIdSchema };
