import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();
  function handleSubmit() {}

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
