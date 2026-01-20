import Fastify from "fastify";
import prismaPlugin from "./plugins/prisma.js";
import userRoutes from "./modules/user/user.routes.js";
import { errorHandler } from "./middlewares/error-handler.js";
import swaggerPlugin from "./plugins/swagger.js";

const app = Fastify({
  logger: true,
});

app.register(prismaPlugin);
app.register(swaggerPlugin);
app.register(userRoutes, { prefix: "/users" });

app.setErrorHandler(errorHandler);

// Database connectivity check
app.get("/db-check", async (req, reply) => {
  await app.prisma.$queryRaw`SELECT 1`;
  return { database: "connected" };
});

// Health check
app.get("/health", async () => {
  return {
    status: "ok",
    message: "Server is healthy",
  };
});

export { app };
