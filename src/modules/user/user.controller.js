class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  createUser = async (request, reply) => {
    const user = await this.userService.createUser(request.body);
    reply.code(201).send({
      success: true,
      data: user,
      message: "User created successfully",
    });
  };

  getUsers = async (request, reply) => {
    const { page = 1, limit = 10, search } = request.query;
    const { items, total } = await this.userService.getUsers({
      page,
      limit,
      search,
    });

    reply.send({
      success: true,
      data: items,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  };

  getUserById = async (request, reply) => {
    const id = Number(request.params.id);
    const user = await this.userService.getUserById(id);

    reply.send({
      success: true,
      data: user,
    });
  };
}

export { UserController };
