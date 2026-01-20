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
}

export { UserService };
