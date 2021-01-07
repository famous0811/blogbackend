import { model, Schema } from "mongoose"

export const PortfolioSchema=new Schema({
    id: { type:String,
        required: true
    },
    img: { type:String, required: true},
    eng: { type:String,required: true},
    kor:{ type:String, required: true},
    title: { type:String, required: true},
})
const Portfolio=model("Portfolio",PortfolioSchema);
export default Portfolio;