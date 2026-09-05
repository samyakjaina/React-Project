import  { useState } from "react";
import { AuthContext }  from "./Context.jsx";
export function AuthContextProvider({ children }) {
  const [authenticatedSession, setAuthenticatedSession] = useState(null);
  console.log("AuthContextProvider: authenticatedSession:", authenticatedSession);
  return (
    <AuthContext.Provider value={{ authenticatedSession, setAuthenticatedSession }}>
      {children}
    </AuthContext.Provider>
  );
}