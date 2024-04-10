import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function HomePage() {
  return (
    <div>
      {/* <h1 className="text-6xl text-center">Welcome</h1> */}
      <UserSearch></UserSearch>
      <UserResults />
    </div>
  );
}

export default HomePage;
