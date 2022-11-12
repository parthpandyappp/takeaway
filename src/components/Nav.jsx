import { BsBookmark } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

const Nav = () => {
  return (
    <nav className="relative flex items-center bg-background justify-between p-4 mb-2">
      <h1 className="flex items-center gap-1 text-xl cursor-pointer text-headline font-bold">
        <MdFastfood />
        TakeAway
      </h1>
      <div className="md:flex items-center mr-4 gap-4">
        <BsBookmark className="text-xl text-headline cursor-pointer" />
        <AiOutlineHeart className="text-2xl text-headline cursor-pointer" />
        <button className="bg-button text-buttontxt px-4 py-1 rounded">
          Login
        </button>
      </div>
    </nav>
  );
};

export { Nav };
