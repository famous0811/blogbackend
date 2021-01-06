import { model, Schema } from "mongoose"

export const PortfolioSchema=new Schema({
    id: { type:string,
        required: true
    },
    img: { type:string, required: true},
    eng: { type:string,required: true},
    kor:{ type:string, required: true},
    title: { type:string, required: true},
})
const Portfolio=model("Portfolio",PortfolioSchema);
export default Portfolio;