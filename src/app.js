import Fastify from "fastify";
import prismaPlugin from "./plugins/prisma.js";
import userRoutes from "./modules/user/user.routes.js";

const app = Fastify({
  logger: true,
});

app.register(prismaPlugin);
app.register(userRoutes, { prefix: "/users" });

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
