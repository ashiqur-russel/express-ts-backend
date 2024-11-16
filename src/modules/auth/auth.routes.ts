import { Router } from "express";
import { getAuthMessage, userLogin, registerNewUser } from "./auth.controller";

const router = Router();

router.get("/", getAuthMessage);
router.post("/login", userLogin);
router.post("/register", registerNewUser);

export default router;
