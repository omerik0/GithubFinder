function githubReducer(state, action) {
  switch (action.type) {
    case "LoadingTrue":
      return {
        ...state,
        isLoading: true,
      };
    case "fetch":
      return { ...state, isLoading: false, users: action.payload };

    case "user/clear":
      return {
        ...state,
        users: [],
      };
    case "Get_User":
      return { ...state, user: action.payload, isLoading: false };
    case "Get_Repos":
      return { ...state, isLoading: false, repos: action.payload };
    default:
      return state;
  }
}
export default githubReducer;
