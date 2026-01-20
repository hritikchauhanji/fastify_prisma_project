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
}

export { UserController };
