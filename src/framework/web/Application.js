import express from "express";
import seedPermissions from "../databases/mongodb/seeders/permissionSeeders.js";

const app = express();

export class Appication {
  constructor(routerManager) {
    this.routerManager = routerManager;
  }

  createApp() {
    seedPermissions();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    this.routerManager.setApp(app);
    this.routerManager.initializeRoutes();
    return app;
  }
}
