import console = require("console");
import Guestbook from "../../models/guestbook";
import Interduce from "../../models/interduce";
import Portfolio from "../../models/portfolio";
import Send from "../../Module/send";

export function SendGuestbook(req,res){
    Guestbook.find({},function(err, result){
        var r = result.reverse();
        // console.log(r);
        // return Send(res,200,"성공?",true,r);
       return res.status(200).send({ state: true, result:"send data",data:r}).end();
    }).catch(err =>{
        return Send(res,200,"error");
    });
}

export function Sendinterduce(req,res) {
    // return Send(res,"200",Interduce);
    Interduce.find({},function(err, result){
        var r = result.reverse();
        console.log(r);
        // return Send(res,200,"성공?",true,r);
       return res.status(200).send({ state: true, result:"send data",data:r}).end();
    }).catch(err =>{
        return Send(res,200,"error");
    });
}

export function SendPortfolio(req,res) {
    // return Send(res,200,Portfolio);
    Portfolio.find({},function(err, result){
        var r = result.reverse();
        // console.log(r);
        // return Send(res,200,"성공?",true,r);
       return res.status(200).send({ state: true, result:"send data",data:r}).end();
    }).catch(err =>{
        return Send(res,200,"error");
    });
}
