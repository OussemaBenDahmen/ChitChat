import { BLOCK_USER, GET_FRIENDSLIST, MUTE_USER } from "../types";

export const GetFriendsList = () => ({
  type: GET_FRIENDSLIST,
});

export const MuteFriend = () => ({
  type: MUTE_USER,
});
export const BlockFriend = () => ({
  type: BLOCK_USER,
});
