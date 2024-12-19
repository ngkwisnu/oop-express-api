import express from "express";

const app = express();

export class Appication {
  constructor(routerManager) {
    this.routerManager = routerManager;
  }

  createApp() {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    this.routerManager.setApp(app);
    this.routerManager.initializeRoutes();
    return app;
  }
}
