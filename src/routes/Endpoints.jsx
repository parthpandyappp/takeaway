import { Routes, Route } from "react-router-dom";
import { Home, Signin, Bookmarks, Likes } from "../pages";

const Endpoints = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </>
  );
};

export { Endpoints as Routes };
