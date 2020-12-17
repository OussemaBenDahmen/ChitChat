const initialState = {};

const ConversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONVERSATION_SUCCESS":
      return { ...action.payload };
    case "LOGOUT_SUCCESS":
      return {};
    default:
      return state;
  }
};

export default ConversationReducer;
