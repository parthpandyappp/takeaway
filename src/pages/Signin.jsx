import { useState } from "react";
import { useExistingUsers } from "../context";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({});

  const navigate = useNavigate();

  const { users } = useExistingUsers();

  const validateUser = (usrnm, pass) => {
    let valid = false;
    users.forEach((user) => {
      if (user.fields.username === usrnm) {
        if (user.fields.password === pass) {
          console.log("True");
          valid = true;
        }
        else{
          valid=false;
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
      navigate("/");
    } else {
      error.exception = "User doesn't exist";
    }

    setErr(error);
  };

  return (
    <div>
      <h1>Signin</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="pswd">Password</label>
        <input
          name="pswd"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign in</button>
      </form>
      {err?.exception}
    </div>
  );
};

export { Signin };
