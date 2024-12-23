import { User } from "../../entities/User.js";

export class AuthController {
  constructor(authCase) {
    this.authCase = authCase;
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const token = await this.authCase.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async register(req, res) {
    try {
      const { username, email, password, role } = req.body;
      const user = new User(username, email, password, role);
      const result = await this.authCase.register(user.getUser());
      res
        .status(201)
        .json({ message: "User registered successfully", data: result });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
