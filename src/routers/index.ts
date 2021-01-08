import * as express from "express"
import admin from "./admin/adminacount.router"
import interduce from "./guest/guest.router"
import {SendGuestbook,Sendinterduce,SendPortfolio} from "./sendData/sendData";

const router = express.Router()

router.use("/admin", admin)
router.use("/guest", interduce)
router.get("/getguestbook",SendGuestbook)
router.get("/getportfolio",SendPortfolio)
router.get("/getInterduce",Sendinterduce)

export default router;