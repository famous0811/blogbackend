import { model, Schema } from "mongoose"
import {PortfolioSchema} from "./portfolio";

const Wlecome=new Schema({
    eng: { type:string,required: true},
    kor:{ type:string, required: true},
})

const InterduceSchema=new Schema({
   Wlecome:Wlecome,
   skills:{ type:string, required: true},
   Contacts:{ type:string, required: true},
   Othersite:{ type:string, required: true},
   portfolio:PortfolioSchema,//아이디 title만 사용
})
const Interduce=model("Interduce",InterduceSchema);
export default Interduce;