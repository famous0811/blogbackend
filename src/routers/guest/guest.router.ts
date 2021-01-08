import * as express from "express"
import {MakeGuestbook} from "./guest.controller";

const router = express.Router()

router.post('/makeguestbook',MakeGuestbook);
export default router;