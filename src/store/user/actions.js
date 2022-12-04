import { CHANGE_USER_NAME } from "./type";

export const changeUserNameAction = (ev) => ({
  type: CHANGE_USER_NAME,
  payload: ev.target.value,
});
