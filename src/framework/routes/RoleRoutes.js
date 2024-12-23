import express from "express";

export class RoleRoutes {
  constructor(roleController) {
    this.router = express.Router();
    this.roleController = roleController;
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", (req, res) => this.roleController.addRole(req, res));
  }

  getRouter() {
    return this.router;
  }
}
