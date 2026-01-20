import { UserRepository } from "./user.repository.js";
import { UserService } from "./user.service.js";
import { UserController } from "./user.controller.js";
import {
  createUserSchema,
  getUsersSchema,
  getUserByIdSchema,
} from "./user.schema.js";

export default async function userRoutes(fastify) {
  const userRepository = new UserRepository(fastify.prisma);
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  fastify.post("/", { schema: createUserSchema }, userController.createUser);
  fastify.get("/", { schema: getUsersSchema }, userController.getUsers);
  fastify.get(
    "/:id",
    { schema: getUserByIdSchema },
    userController.getUserById,
  );
}
