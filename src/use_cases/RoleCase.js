export class RoleCase {
  constructor(roleRepository) {
    this.roleRepository = roleRepository;
  }

  async addRole(role) {
    const result = await this.roleRepository.addRole(role);
    return result;
  }
}
