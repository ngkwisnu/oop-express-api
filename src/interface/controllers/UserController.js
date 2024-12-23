import { User } from "../../entities/User.js";

export class UserController {
  constructor(userCase) {
    this.userCase = userCase;
  }

  async findAllUsers(req, res) {
    try {
      const users = await this.userCase.findAllUsers();
      res.status(200).json({ data: users });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
