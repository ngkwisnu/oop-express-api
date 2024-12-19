import { User } from "../../entities/User.js";

export class UserController {
  constructor(userCase) {
    this.userCase = userCase;
  }

  async registerUser(req, res) {
    try {
      const { username, email, password, role } = req.body;
      const user = new User(username, email, password, role);
      const userRegistered = await this.userCase.registerUser(user);
      res.status(201).json({
        message: "User registered successfully",
        data: userRegistered,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
