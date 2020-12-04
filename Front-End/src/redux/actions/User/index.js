import {
  CREATE_ACCOUNT,
  DELETE_ACCOUNT,
  EDIT_ACCOUNT,
  GET_ACCOUNT,
} from "../Types";

export const CreateAccount = () => ({
  type: CREATE_ACCOUNT,
});
export const GetAccount = () => ({
  type: GET_ACCOUNT,
});

export const EditAccount = () => ({
  type: EDIT_ACCOUNT,
});
export const DeleteAccount = () => ({
  type: DELETE_ACCOUNT,
});
