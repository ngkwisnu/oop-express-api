import { populate } from "dotenv";

export class UserRepository {
  constructor(userSchema) {
    this.userSchema = userSchema;
  }

  addUser(user) {
    return this.userSchema.create(user);
  }

  async findByEmail(email) {
    return this.userSchema
      .findOne({ email })
      .populate({
        path: "role",
        populate: { path: "permissions", select: "name" },
      })
      .lean();
  }

  findById(id) {
    return this.userSchema.findById(id);
  }

  findAll() {
    return this.userSchema.find();
  }
}
