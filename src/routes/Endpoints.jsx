import { Routes, Route } from "react-router-dom";
import { Home, Signin } from "../pages";

const Endpoints = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
    </>
  );
};

export { Endpoints as Routes };
