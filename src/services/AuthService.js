export class AuthService {
  constructor(userRepository, jwtService) {
    this.userRepository = userRepository;
    this.jwtService = jwtService;
  }

  async userIsRegistered(email) {
    const user = await this.userRepository.findByEmail(email);
    if (user) {
      return true;
    }
  }

  async generateToken(user) {
    const token = await this.jwtService.sign(user);
    return token;
  }
}
