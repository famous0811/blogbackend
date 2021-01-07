//login
import { model, Schema } from "mongoose";

const loginscheam = new Schema({
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Login = model("login", loginscheam);
export default Login;
