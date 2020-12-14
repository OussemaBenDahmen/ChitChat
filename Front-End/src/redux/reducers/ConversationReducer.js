const initialState = {};

const ConversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CONVERSATION_SUCCESS":
      return { ...action.payload };

    default:
      return state;
  }
};

export default ConversationReducer;
