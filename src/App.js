import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

export default function App() {
  return (
    <UserContextProvider>
      <h1>React with bro</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}
