import { useEffect, useState } from "react";
import { AuthContext } from "./Context.jsx";

export function AuthContextProvider({ children }) {
  const [authenticatedSession, setAuthenticatedSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function restoreSession() {
      try {
        const response = await fetch("http://localhost:8080/login/me", {
          credentials: "include",
        });

        if (response.ok) {
          setAuthenticatedSession(await response.json());
        }
      } catch (error) {
        console.error("Unable to restore authentication session:", error);
      } finally {
        setIsLoading(false);
      }
    }

    restoreSession();
  }, []);

  async function logout() {
    await fetch("http://localhost:8080/login/logout", {
      method: "POST",
      credentials: "include",
    });
    setAuthenticatedSession(null);
  }

  return (
    <AuthContext.Provider value={{ authenticatedSession, setAuthenticatedSession, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}