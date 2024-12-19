export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async userIsRegistered(email) {
    const user = await this.userRepository.findByEmail(email);
    if (user) {
      return true;
    }
  }
}
