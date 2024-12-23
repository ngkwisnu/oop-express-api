import { Permission } from "../schemas/permissionSchema.js";

const dataPermissions = ["create", "update", "delete", "get", "list"];

const seedPermissions = async () => {
  const result = await Permission.find({});

  const permissions = result.map((permission) => permission.name);

  const missingPermissions = dataPermissions.filter(
    (permission) => !permissions.includes(permission)
  );

  if (missingPermissions.length !== 0) {
    await Permission.insertMany(missingPermissions.map((name) => ({ name })));
  }
};

export default seedPermissions;
