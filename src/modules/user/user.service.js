class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async createUser(payload) {
    return this.userRepository.create(payload);
  }
}

export { UserService };
