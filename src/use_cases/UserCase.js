export class UserCase {
  constructor(userRepository, userService) {
    this.userRepository = userRepository;
    this.userService = userService;
  }
  async registerUser(user) {
    const userExists = await this.userService.userIsRegistered(user.email);
    if (userExists) throw new Error("User already exists");
    const result = this.userRepository.addUser(user);
    return result;
  }
}
