export class UserCase {
  constructor(userRepository, userService) {
    this.userRepository = userRepository;
    this.userService = userService;
  }

  async findAllUsers() {
    const result = await this.userRepository.findAll();
    return result;
  }
}
