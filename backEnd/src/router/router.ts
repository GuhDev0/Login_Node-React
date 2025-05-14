import { Router,Request, Response  } from "express";
import {createUserService } from "../services/services"
import { createUser } from "../controller/controller";
const router = Router();



router.post("/",createUser)

export default router;