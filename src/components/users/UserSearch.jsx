import { useState, useContext } from "react";
import { githubContext } from "../../contexts/github/githubContext";
import { alertContext } from "../../contexts/alert/alertContext";

function UserSearch() {
  const { users, searchUsers, handleClearUsers } = useContext(githubContext);
  const { setAlertMessage } = useContext(alertContext);
  const [search, setSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return setAlertMessage("please search for user..");
    searchUsers(search);
    setSearch("");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                value={search}
                type="text"
                className=" w-full pr-40 bg-gray-200 input  text-black"
                placeholder="Search..."
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button
                type="submit"
                className="absolute top-0 right-[-1px] rounded-l-none btn  w-36 "
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {users.length !== 0 && (
          <button onClick={handleClearUsers} className="btn btn-ghost ">
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default UserSearch;
