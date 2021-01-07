import { model, Schema } from "mongoose"

export const guestSchema=new Schema({
    user_id: { type:String,
        required: true
    },
    text:{ type:String, required: true},
})
const guest=model("guest",guestSchema);
export default guest;