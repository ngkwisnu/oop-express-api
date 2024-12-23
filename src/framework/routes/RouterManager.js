export class RouterManager {
  constructor(userRoutes, roleRoutes, authRoutes, authMiddleware) {
    this.userRoutes = userRoutes;
    this.roleRoutes = roleRoutes;
    this.authRoutes = authRoutes;
    this.authMiddleware = authMiddleware;
  }

  setApp(app) {
    this.app = app;
  }

  initializeRoutes() {
    this.app.use("/users", this.userRoutes.getRouter());
    this.app.use("/roles", this.roleRoutes.getRouter());
    this.app.use("/auth", this.authRoutes.getRouter());
  }
}
