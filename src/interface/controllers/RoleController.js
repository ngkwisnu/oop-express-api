import { Role } from "../../entities/Role.js";

export class RoleController {
  constructor(roleCase) {
    this.roleCase = roleCase;
  }

  async addRole(req, res) {
    try {
      const { name, permissions } = req.body;
      const role = new Role(name, permissions);
      const roleAdded = await this.roleCase.addRole(role.getRole());
      res
        .status(201)
        .json({ message: "Role added successfully", data: roleAdded });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
