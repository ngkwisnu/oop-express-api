export class Role {
  constructor(name, permissions) {
    this.name = name;
    this.permissions = permissions;
  }

  getRole() {
    if (this.name && this.permissions) {
      return {
        name: this.name,
        permissions: this.permissions,
      };
    }
  }
}
