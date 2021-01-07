import Send from "../../Module/Send";
import interduce from "../../models/interduce";

export const Interduce = async (req,res)=>{
    console.log("rreseq: ",req);
    return Send(res,200,interduce);
}

export const SetInterduce = async (req,res)=>{
    const {id,Wlecome,skills,Contacts,Othersite,portfolio} = req.body;

    interduce.findOne({_id:id},function(result){
        if(!result)
            return Send(res,403,"수정 실패");
        result.skills=skills;
        result.Wlecome=Wlecome;
        result.Contacts=Contacts;
        result.Othersite=Othersite;
        result.portfolio=portfolio;
        result.save();
        return Send(res,200,"저장완료!");
    })
}