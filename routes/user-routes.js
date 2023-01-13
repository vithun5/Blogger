import express from "express";
import { GetAllUsers, login, signup } from "../controllers/user-controller";

const router = express.Router()

router.get("/", GetAllUsers)
router.post("/signup", signup)
router.post("/login",login)

export default router