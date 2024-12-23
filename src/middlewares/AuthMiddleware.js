import jwt from "jsonwebtoken";

export class AuthMiddleware {
  constructor(permissionsRepository, jwtService) {
    this.jwtService = jwtService;
    this.permissionsRepository = permissionsRepository;
  }
  async authenticate(req, res, next) {
    try {
      const bearerToken = req.headers.authorization;
      if (!bearerToken)
        return res.status(401).json({ message: "Unauthorized" });
      const token = bearerToken.split(" ")[1];
      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.user = user;
      next();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  checkPermissions(permission) {
    return (req, res, next) => {
      try {
        const user = req.user;
        const userPermission = user.role.permissions.filter(
          (p) => p.name === permission
        );
        if (userPermission.length === 0)
          return res.status(403).json({ message: "Forbidden" });
        next();
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };
  }
}
