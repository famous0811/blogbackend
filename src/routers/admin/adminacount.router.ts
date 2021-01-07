import * as express from "express"
import {Login,SignUp,Token} from "./adminacount.controller";

const router = express.Router()

router.get("/token", Token);
router.post("/signUp", SignUp);
router.post("/login", Login);

export default router;