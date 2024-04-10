import { useContext } from "react";
import { githubContext } from "../../contexts/github/githubContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

function UserResults() {
  const { users, isLoading } = useContext(githubContext);
  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map((user) => {
            return <UserItem key={user.id} user={user}></UserItem>;
          })}
        </div>
      )}
    </div>
  );
}

export default UserResults;
