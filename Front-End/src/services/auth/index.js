import { LOG_IN, LOG_OUT } from "../../redux/actions/Types";

export const Login = () => ({
  type: LOG_IN,
});
export const Logout = () => ({
  type: LOG_OUT,
});
