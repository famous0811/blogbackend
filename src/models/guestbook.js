import { model, Schema } from "mongoose"

export const guestSchema=new Schema({
    user_id: { type:string,
        required: true
    },
    text:{ type:string, required: true},
})
const guest=model("guest",guestSchema);
export default guest;