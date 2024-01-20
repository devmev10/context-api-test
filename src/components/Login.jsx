import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();

  const { setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setUser({ userName, password });
  }

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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
