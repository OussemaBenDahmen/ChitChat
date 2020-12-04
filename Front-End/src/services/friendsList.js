import {
  BlockFriend,
  GetFriendsList,
  MuteFriend,
} from "../redux/actions/Friends";

export const GetFriendListService = () => {
  dispatch(GetFriendsList());
  Axios.get(`${ServerURI}/FriendsList`, {
    withCredentials: true,
  })
    .then((res) =>
      dispatch({ type: "GET_FRIENDLIST_SUCCESS", payload: res.data })
    )
    .catch((err) => {
      dispatch({ type: "GET_FRIENDLIST_ERROR", payload: err });
    });
};

export const MuteFriendService = (data) => {
  dispatch(MuteFriend());
  Axios.put(
    `${ServerURI}/Friend_id=${data._id}`,
    {},
    {
      withCredentials: true,
    }
  )
    .then((res) => dispatch({ type: "MUTE_FRIEND_SUCCESS", payload: res.data }))
    .catch((err) => {
      dispatch({ type: "MUTE_FRIEND_ERROR", payload: err });
    });
};

export const BlockFriendService = (data) => {
  dispatch(BlockFriend());
  Axios.put(
    `${ServerURI}/Friend_id=${data._id}`,
    {},
    {
      withCredentials: true,
    }
  )
    .then((res) =>
      dispatch({ type: "BLOCK_FRIEND_SUCCESS", payload: res.data })
    )
    .catch((err) => {
      dispatch({ type: "BLOCK_FRIEND_ERROR", payload: err });
    });
};
