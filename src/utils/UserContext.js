// creating this context to keep the information about the logged in user.

import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
