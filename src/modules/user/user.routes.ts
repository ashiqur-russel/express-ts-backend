import express from "express";
import { getAllUsers } from "./user.controller";
import { RouteGurad, RoleGuard } from "../../middlewares/route.guard";

const router = express.Router();

router.get("/", RouteGurad, RoleGuard("admin"), getAllUsers);

export default router;
