export class JsonWebToken {
  constructor(jwt) {
    this.jwt = jwt;
  }
  sign(payload) {
    console.log(payload);
    return this.jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
  }

  verify(token) {
    return this.jwt.verify(token, process.env.JWT_SECRET);
  }
}
