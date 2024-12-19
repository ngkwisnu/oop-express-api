import express from "express";

const router = express.Router();

export class UserRoutes {
  constructor(userController) {
    this.router = router;
    this.userController = userController;
    this.initializeRoutes();
  }
  initializeRoutes() {
    this.router.post("/register", (req, res) =>
      this.userController.registerUser(req, res)
    );
  }
  getRouter() {
    return this.router;
  }
}
