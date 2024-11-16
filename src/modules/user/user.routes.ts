import { Router } from "express";
import { getAllUsers } from "./user.controller";
import { RouteGurad } from "../../guard/route.guard";
import { RoleGuard } from "../../guard/role.guard";

const router = Router();

router.get("/", RouteGurad, RoleGuard("admin"), getAllUsers);

export default router;
