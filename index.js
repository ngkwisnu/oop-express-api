import dotenv from "dotenv";

import { connect } from "./src/framework/databases/mongodb/connection.js";
import { Appication } from "./src/framework/web/Application.js";
import { UserCase } from "./src/use_cases/UserCase.js";
import { UserController } from "./src/interface/controllers/UserController.js";
import { UserRepository } from "./src/interface/repositories/UserRepository.js";
import { UserService } from "./src/services/UserService.js";
import { User } from "./src/entities/User.js";
import { UserRoutes } from "./src/framework/routes/userRoutes.js";
import { RouterManager } from "./src/framework/routes/RouterManager.js";
import { User as userSchema } from "./src/framework/databases/mongodb/schemas/userSchema.js";

dotenv.config();

const userRepository = new UserRepository(userSchema);
const userService = new UserService(userRepository);
const userCase = new UserCase(userRepository, userService);
const userController = new UserController(userCase, User);
const userRoutes = new UserRoutes(userController);
const routerManager = new RouterManager(userRoutes);
const application = new Appication(routerManager);
const app = application.createApp(routerManager);
const startServer = async () => {
  await connect();
  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
};

startServer();
