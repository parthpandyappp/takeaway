import { useState } from "react";
import { useExistingUsers } from "../context";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({});

  const navigate = useNavigate();

  const { users, setLogin } = useExistingUsers();

  const validateUser = (usrnm, pass) => {
    let valid = false;
    users.forEach((user) => {
      if (user.fields.username === usrnm) {
        if (user.fields.password === pass) {
          console.log("True");
          valid = true;
        } else {
          valid = false;
          err.password = "incorrect password";
        }
      }
    });
    console.log("False");
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = {};
    if (validateUser(username, password)) {
      setLogin(true);
      navigate("/");
    } else {
      error.exception = "User doesn't exist";
    }

    setErr(error);
  };

  return (
    <form
      className="flex flex-col md:flex-row justify-center items-center h-screen"
      onSubmit={handleSubmit}
    >
      <div className="border-2 border-slate-600 w-3/8 p-3 rounded-md">
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="flex flex-col mt-8">
          <label htmlFor="email" className="font-medium">
            Username
          </label>
          <input
            name="username"
            type="text"
            className="border-2 border-slate-600 rounded-md py-1 w-full px-2 bg-amber-50"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="border-2 border-slate-600 rounded-md py-1 w-full  px-2 bg-amber-50"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-5 gap-2">
          <button
            type="submit"
            className="text-center w-full py-1 bg-button text-buttontxt rounded"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export { Signin };
