import "./App.css";
import UserContextProvider from "./context/UserContextProvider";

export default function App() {
  return (
    <UserContextProvider>
      <h1>React with bro</h1>
    </UserContextProvider>
  );
}
