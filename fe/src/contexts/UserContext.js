import { createContext, useState } from "react";

const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [roles, setRoles] = useState([]);
  const [currentRole, setCurrentRole] = useState(0);
  const [users, setUsers] = useState([]);
  const URL = "http://localhost:8080/users/list";
  const ROLE_URL = "http://localhost:8080/users/roles";

  return (
    <UserContext.Provider
      value={{
        roles,
        setRoles,
        currentRole,
        setCurrentRole,
        users,
        setUsers,
        URL,
        ROLE_URL,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
