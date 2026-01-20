class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async createUser(payload) {
    return this.userRepository.create(payload);
  }

  async getUsers({ page, limit, search }) {
    const skip = (page - 1) * limit;
    return this.userRepository.findMany({ skip, take: limit, search });
  }

  async getUserById(id) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }
    return user;
  }

  async updateUser(id, payload) {
    const existing = await this.userRepository.findById(id);
    if (!existing) {
      const err = new Error("User not found");
      err.statusCode = 404;
      throw err;
    }

    if (payload.email && payload.email !== existing.email) {
      const emailUsed = await this.userRepository.findByEmail(payload.email);
      if (emailUsed) {
        const err = new Error("Email already in use");
        err.statusCode = 409;
        throw err;
      }
    }

    return this.userRepository.updateById(id, payload);
  }
}

export { UserService };
