import UserContext from "./UserContext";
import { useState } from "react";
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    // Setup context
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
