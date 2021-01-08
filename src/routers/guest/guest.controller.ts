import Send from "../../Module/Send";
import Guestbook from "../../models/guestbook";

export const MakeGuestbook = async (req,res)=>{
    const {userid,text} = req.body;

    const newGuestbook =new Guestbook({
        user_id:userid,
        text
    })

    await newGuestbook.save().then((data)=>{
        return res
              .status(200)
              .Send({ state: true, result: "save guestbook" });
    }).catch(err=>{
        Send(res,403,"don't save");
    })
}