import { model, Schema } from "mongoose";

const InterduceSchema = new Schema({
  wlecome: {
    kor: { type: String, required: true },
    eng: { type: String, required: true },
  },
  skills: [{ type: String, required: true }],
  otherinformations: [
    {
      text: { type: String, required: true },
      adds: { type: String, required: false },
    },
  ],
  portfolios: [
    {
      id: { type: String, required: true },
      title: { type: String, required: true },
    },
  ], //아이디 title만 사용
});
const Interduce = model("Interduce", InterduceSchema);
export default Interduce;
