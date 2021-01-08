import * as express from "express"
import {Login,SignUp,Token,Makeportfolio,Amendportfolio,Makeinterduce,Amendinterduce} from "./adminacount.controller";

const router = express.Router()

router.get("/token", Token);
router.post("/signUp", SignUp);
router.post("/login", Login);
router.post("/makeportfolio", Makeportfolio);
router.post("/amendportfolio", Amendportfolio);
router.post("/makeInterduce", Makeinterduce);
router.post("/amendInterduce", Amendinterduce);

export default router;