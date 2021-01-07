import { model, Schema } from "mongoose"
import {PortfolioSchema} from "./portfolio";

const Wlecome=new Schema({
    eng: { type:String,required: true},
    kor:{ type:String, required: true},
})

const InterduceSchema=new Schema({
   Wlecome:Wlecome,
   skills:[{ type:String, required: true}],
   Contacts:[{ type:String, required: true}],
   Othersite:[{ type:String, required: true}],
   portfolio:[PortfolioSchema],//아이디 title만 사용
})
const Interduce=model("Interduce",InterduceSchema);
export default Interduce;