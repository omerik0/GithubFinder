import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url: avatar } }) {
  return (
    <div className="card shadow-md compact bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow-lg w-14 h-14">
              <img src={avatar} alt="avatar-img" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title text-white">{login}</h2>
          <Link
            to={`/user/${login}`}
            className="text-base-content text-opacity-40"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
