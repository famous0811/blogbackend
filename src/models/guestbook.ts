import { model, Schema } from "mongoose"

export const guestSchema=new Schema({
    userId: { type:String,
        required: true
    },
    text:{ type:String, required: true},
})
const guest=model("guest",guestSchema);
export default guest;