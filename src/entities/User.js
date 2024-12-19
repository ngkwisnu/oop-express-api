export class User {
  constructor(username, email, password, role) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  setUserRepository(UserRepository) {
    this.UserRepository = UserRepository;
  }

  add() {
    if (this.username && this.email && this.password && this.role) {
      this.UserRepository.addUser(this);
    }
  }
}
