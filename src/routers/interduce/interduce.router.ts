import * as express from "express"
import {Interduce,SetInterduce} from "./interduce.controller";

const router = express.Router()

router.post("/test",Interduce);
router.post("/setInterduce:id",SetInterduce);

export default router;