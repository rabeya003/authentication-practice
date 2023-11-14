import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="max-w-7xl gap-5  flex ">
      <Link
        className="p-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md"
        to="/social"
      >
        Social
      </Link>
      <Link
        className="p-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md"
        to="/login"
      >
        Login
      </Link>

      <Link
        className="p-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md"
        to="/registration"
      >
        Registration
      </Link>
    </nav>
  );
};

export default Header;
