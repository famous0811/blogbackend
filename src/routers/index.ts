import * as express from "express"
import admin from "./admin/adminacount.router"
import interduce from "./interduce/interduce.router"

const router = express.Router()

router.use("/admin", admin)
router.use("/interduce", interduce)

export default router;