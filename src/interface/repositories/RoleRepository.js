export class RoleRepository {
  constructor(roleSchema) {
    this.roleSchema = roleSchema;
  }

  async addRole(role) {
    const result = await this.roleSchema.create(role);
    return result;
  }
}
