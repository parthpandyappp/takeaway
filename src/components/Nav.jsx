import { BsBookmark } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useExistingUsers, useRestaurantManager } from "../context";

const Nav = () => {
  const { isLoggedIn, setLogin } = useExistingUsers();
  const { dispatch } = useRestaurantManager();
  const handleLogout = () => {
    setLogin(false);
    dispatch({ type: "BACK_TO_DEFAULT" });
    localStorage.setItem("user", null);
    localStorage.setItem("isLoggedIn", false);
  };
  return (
    <nav className="relative flex-none flex items-center bg-background justify-between p-4 mb-2">
      <h1 className="flex items-center gap-1 text-xl cursor-pointer text-headline font-bold">
        <MdFastfood />
        <Link to="/">TakeAway</Link>
      </h1>
      <div className="md:flex items-center mr-4 gap-4">
        {isLoggedIn && (
          <p className="font-bold font-mono self-end underline underline-offset-4">
            Welcome, {localStorage.getItem("user")}
          </p>
        )}
        <Link to="/bookmarks">
          <BsBookmark className="text-xl text-headline cursor-pointer" />
        </Link>
        <Link to="/likes">
          <AiOutlineHeart className="text-2xl text-headline cursor-pointer" />
        </Link>
        {isLoggedIn ? (
          <button
            className="bg-button text-buttontxt px-4 py-1 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-button text-buttontxt px-4 py-1 rounded">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export { Nav };
