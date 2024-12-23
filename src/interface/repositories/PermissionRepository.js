export class PermissionRepository {
  constructor(permissionSchema) {
    this.permissionSchema = permissionSchema;
  }

  async getByName(name) {
    return this.permissionSchema.findOne({ name });
  }
}
