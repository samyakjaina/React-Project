import { useEffect, useState } from "react";
import { AuthContext } from "./Context.jsx";
import { apiFetch } from "../api/apiClient.js";

export function AuthContextProvider({ children }) {
  const [authenticatedSession, setAuthenticatedSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function restoreSession() {
      try {
        // await apiFetch("/login/csrf");
        let response = await apiFetch("/login/me");

        if (response.status === 401) {
          const refreshResponse = await apiFetch("/login/refresh", { method: "POST" });
          if (refreshResponse.ok) response = await apiFetch("/login/me");
        }

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
    await apiFetch("/login/logout", { method: "POST" });
    setAuthenticatedSession(null);
  }

  return (
    <AuthContext.Provider value={{ authenticatedSession, setAuthenticatedSession, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}