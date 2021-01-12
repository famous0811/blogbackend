import { model, Schema } from "mongoose";

const Wlecome = new Schema({
  eng: { type: String, required: true },
  kor: { type: String, required: true },
});

const InterduceSchema = new Schema({
  Wlecome: Wlecome,
  skills: [{ type: String, required: true }],
  otherinformations: [
    {
      text: { type: String, required: true },
      adds: { type: String, required: true },
    },
  ],
  portfolios: [{
    id:{ type: String, required: true},
    title: { type: String, required: true },
  }], //아이디 title만 사용
});
const Interduce = model("Interduce", InterduceSchema);
export default Interduce;
