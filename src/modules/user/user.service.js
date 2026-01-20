import { ApiError } from "../../utils/api-error.js";

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
      throw new ApiError(404, "User not found");
    }
    return user;
  }

  async updateUser(id, payload) {
    const existing = await this.userRepository.findById(id);
    if (!existing) {
      throw new ApiError(404, "User not found");
    }

    if (payload.email && payload.email !== existing.email) {
      const emailUsed = await this.userRepository.findByEmail(payload.email);
      if (emailUsed) {
        throw new ApiError(409, "Email already in use");
      }
    }

    return this.userRepository.updateById(id, payload);
  }

  async deleteUser(id) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      return null;
    }

    await this.userRepository.softDeleteById(id);
    return true;
  }
}

export { UserService };
