export class AuthCase {
  constructor(userRepository, authService) {
    this.userRepository = userRepository;
    this.authService = authService;
  }

  async login(email, password) {
    const user = await this.userRepository.findByEmail(email);
    const token = await this.authService.generateToken(user);
    if (!user) throw new Error("User not found");
    if (user.password !== password) throw new Error("Invalid password");
    return token;
  }

  async register(user) {
    const userExists = await this.authService.userIsRegistered(user.email);
    if (userExists) throw new Error("User already exists");
    const result = this.userRepository.addUser(user);
    return result;
  }
}
