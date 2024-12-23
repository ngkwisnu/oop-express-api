export class User {
  constructor(username, email, password, role) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  getUser() {
    if (this.username && this.email && this.password && this.role) {
      return {
        username: this.username,
        email: this.email,
        password: this.password,
        role: this.role,
      };
    }
  }
}
