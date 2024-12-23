import express from "express";
export class UserRoutes {
  constructor(userController, authMiddleware) {
    this.router = express.Router();
    this.userController = userController;
    this.authMiddleware = authMiddleware;
    this.initializeRoutes();
  }
  initializeRoutes() {
    this.router.get(
      "/",
      this.authMiddleware.authenticate,
      this.authMiddleware.checkPermissions("get"),
      (req, res) => this.userController.findAllUsers(req, res)
    );
  }
  getRouter() {
    return this.router;
  }
}
