import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

// Health check
app.get("/health", async () => {
  return {
    status: "ok",
    message: "Server is healthy",
  };
});

export { app };
