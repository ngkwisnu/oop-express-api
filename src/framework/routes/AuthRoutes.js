import express from "express";

export class AuthRoutes {
  constructor(authController) {
    this.router = express.Router();
    this.authController = authController;
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/login", (req, res) =>
      this.authController.login(req, res)
    );
    this.router.post("/register", (req, res) =>
      this.authController.register(req, res)
    );
  }

  getRouter() {
    return this.router;
  }
}
