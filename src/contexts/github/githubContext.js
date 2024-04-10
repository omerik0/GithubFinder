import { createContext, useEffect, useReducer, useState } from "react";
import githubReducer from "../githubReducer";
import { useParams } from "react-router-dom";
const BASE_API = "https://api.github.com";
export const githubContext = createContext();
const initialState = {
  users: [],
  user: {},
  repos: [],
  isLoading: false,
};
function GithubProvider({ children }) {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  async function searchUsers(search) {
    setLoading();
    const res = await fetch(`${BASE_API}/search/users?q=${search}`);

    const data = await res.json();
    console.log(data);

    dispatch({ type: "fetch", payload: data.items });
  }
  async function getUser(login) {
    setLoading();
    const res = await fetch(`${BASE_API}/users/${login}`);
    if (!res.ok) return (window.location = `/notfound`);

    const data = await res.json();

    dispatch({ type: "Get_User", payload: data });
  }

  async function getRepos(login) {
    setLoading();
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    const res = await fetch(`${BASE_API}/users/${login}/repos?${params}`);

    const data = await res.json();
    console.log(data);

    dispatch({ type: "Get_Repos", payload: data });
  }
  function setLoading() {
    dispatch({ type: "LoadingTrue" });
  }
  function handleClearUsers() {
    dispatch({ type: "user/clear" });
  }

  return (
    <githubContext.Provider
      value={{
        repos: state.repos,
        getRepos,
        user: state.user,
        getUser,
        handleClearUsers,
        users: state.users,
        isLoading: state.isLoading,
        searchUsers,
      }}
    >
      {children}
    </githubContext.Provider>
  );
}

export default GithubProvider;
