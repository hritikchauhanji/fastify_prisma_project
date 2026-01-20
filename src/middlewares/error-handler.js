export function errorHandler(error, request, reply) {
  const statusCode = error.statusCode || 500;

  reply.code(statusCode).send({
    success: false,
    message: error.message || "Internal Server Error",
  });
}
