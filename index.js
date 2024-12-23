import "dotenv/config";
import jwt from "jsonwebtoken";

import { connect } from "./src/framework/databases/mongodb/connection.js";
import { JsonWebToken } from "./src/utils/JsonWebToken.js";
import { Appication } from "./src/framework/web/Application.js";
import { AuthService } from "./src/services/AuthService.js";
import { AuthMiddleware } from "./src/middlewares/AuthMiddleware.js";

import { UserCase } from "./src/use_cases/UserCase.js";
import { UserController } from "./src/interface/controllers/UserController.js";
import { UserRepository } from "./src/interface/repositories/UserRepository.js";
import { UserRoutes } from "./src/framework/routes/userRoutes.js";
import { User as userSchema } from "./src/framework/databases/mongodb/schemas/userSchema.js";
import { User } from "./src/entities/User.js";

import { RoleCase } from "./src/use_cases/RoleCase.js";
import { RoleController } from "./src/interface/controllers/RoleController.js";
import { RoleRepository } from "./src/interface/repositories/RoleRepository.js";
import { Role } from "./src/entities/Role.js";
import { RoleRoutes } from "./src/framework/routes/RoleRoutes.js";
import { RouterManager } from "./src/framework/routes/RouterManager.js";
import { Role as roleSchema } from "./src/framework/databases/mongodb/schemas/roleSchema.js";

import { AuthCase } from "./src/use_cases/AuthCase.js";
import { AuthController } from "./src/interface/controllers/AuthController.js";
import { AuthRoutes } from "./src/framework/routes/AuthRoutes.js";

import { Permission as permissionSchema } from "./src/framework/databases/mongodb/schemas/permissionSchema.js";
import { PermissionRepository } from "./src/interface/repositories/PermissionRepository.js";

const jwtService = new JsonWebToken(jwt);
const permissionsRepository = new PermissionRepository(permissionSchema);
const authMiddleware = new AuthMiddleware(permissionsRepository, jwtService);

const userRepository = new UserRepository(userSchema);
const authService = new AuthService(userRepository, jwtService);
const userCase = new UserCase(userRepository, AuthService);
const userController = new UserController(userCase, User);
const userRoutes = new UserRoutes(userController, authMiddleware);

const roleRepository = new RoleRepository(roleSchema);
const roleCase = new RoleCase(roleRepository);
const roleController = new RoleController(roleCase, Role);
const roleRoutes = new RoleRoutes(roleController);

const authCase = new AuthCase(userRepository, authService);
const authController = new AuthController(authCase);
const authRoutes = new AuthRoutes(authController);

const routerManager = new RouterManager(
  userRoutes,
  roleRoutes,
  authRoutes,
  authMiddleware
);
const application = new Appication(routerManager);
const app = application.createApp(routerManager);
const startServer = async () => {
  await connect();
  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
};

startServer();
