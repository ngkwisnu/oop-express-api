export class UserRepository {
  constructor(userSchema) {
    this.userSchema = userSchema;
  }

  addUser(user) {
    return this.userSchema.create(user);
  }

  findByEmail(email) {
    return this.userSchema.findOne({ email });
  }
}
