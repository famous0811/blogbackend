import Send from "../../Module/Send";
import Guestbook from "../../models/guestbook";

export const MakeGuestbook = async (req,res)=>{
    const {userId,text} = req.body;
    // console.log(req.body);
    const newGuestbook =new Guestbook({
        userId:userId,
        text:text});
    // console.log(newGuestbook);

    await newGuestbook.save().then((data)=>{
        console.log(data);
        return res
              .status(200)
              .send({ state: true, result: "save guestbook"}).end();
    }).catch(err=>{
        // console.log(err);
        Send(res,403,"don't save");
    })
}