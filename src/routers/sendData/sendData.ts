import Guestbook from "../../models/guestbook";
import Interduce from "../../models/interduce";
import Portfolio from "../../models/portfolio";
import Send from "../../Module/send";

export function SendGuestbook(res,req){
    Send(res,"200",Guestbook);
}

export function Sendinterduce(res,req) {
    return Send(res,"200",Interduce);
}

export function SendPortfolio(res,req) {
    return Send(res,200,Portfolio);
}
