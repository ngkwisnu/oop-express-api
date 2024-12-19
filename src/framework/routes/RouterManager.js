export class RouterManager {
  constructor(userRoutes) {
    this.userRoutes = userRoutes;
  }

  setApp(app) {
    this.app = app;
  }

  initializeRoutes() {
    this.app.use("/users", this.userRoutes.getRouter());
  }
}
