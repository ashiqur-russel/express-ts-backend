import { Router } from "express";
import { all, login, register } from "./auth.controller";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/", all);

export default router;
