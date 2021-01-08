//login
import { model, Schema } from "mongoose";

const Adminscheam = new Schema({
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = model("Admin", Adminscheam);
export default Admin;
