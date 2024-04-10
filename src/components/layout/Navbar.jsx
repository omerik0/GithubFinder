import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar({ title = "Github Finder" }) {
  return (
    <nav className=" navbar mb-12 bg-neutral shadow-lg text-neutral-100 ">
      <div className="container mx-auto">
        <div className=" flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />

          <Link to="/" className="text-xl font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 ">
          <div className="flex justify-end px-2">
            <Link className="btn btn-ghost btn-sm uppercase " to="/">
              Home
            </Link>
            <Link to="/about" className=" btn btn-ghost btn-sm uppercase ">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
