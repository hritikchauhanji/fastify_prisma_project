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
}

export { UserService };
