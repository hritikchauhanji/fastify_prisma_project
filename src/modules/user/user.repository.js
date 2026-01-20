class UserRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  async create(data) {
    return this.prisma.user.create({ data });
  }

  async findMany({ skip, take, search }) {
    const where = {
      isDeleted: false,
      ...(search && {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
        ],
      }),
    };

    const [items, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: "desc" },
      }),
      this.prisma.user.count({ where }),
    ]);

    return { items, total };
  }

  async findById(id) {
    return this.prisma.user.findFirst({
      where: {
        id,
        isDeleted: false,
      },
    });
  }

  async updateById(id, data) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async findByEmail(email) {
    return this.prisma.user.findFirst({
      where: {
        email,
        isDeleted: false,
      },
    });
  }

  async softDeleteById(id) {
    return this.prisma.user.update({
      where: { id },
      data: { isDeleted: true },
    });
  }
}

export { UserRepository };
