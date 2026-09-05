
import { useState, useActionState } from "react";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../auth/UseAuth.jsx";
import { useDispatch } from "react-redux";
import "./Login.css";
import { setCredentials } from "../redux/AuthSlice.jsx";

const LOGIN_API_URL = "http://localhost:8080/login/signin";

function Login ()  {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAuthenticatedSession } = UseAuth();
  // const dispatch = useDispatch();
  const initialState = {
    message: "",
  };

  async function loginAction(previousState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");

    if (!username || !password) {
      setPassword("");
      return {
        message: "Username and password are required",
      };
    }

    try {
      const response = await fetch(LOGIN_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const responseBody = await response.json();

      if (!response.ok) {
        throw new Error(responseBody.message || "Login failed");
      }

      setAuthenticatedSession(responseBody);
      // dispatch(setCredentials(responseBody));
      navigate("/health");

      return {
        message: "Login successful!",
      };
    } catch (error) {
      console.error("Login API request failed:", error);
      return {
        message: error.message || "Unable to connect to the login API",
      };
    }
  }
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState
  );


  return (
    <div className="login-page">
      <form className="login-card" action={formAction} >
        <p className="login-eyebrow">Welcome back</p>
        <h1>Login Page</h1>
        <p className="login-subtitle">Sign in to continue to your dashboard.</p>

        <label htmlFor="username">Username</label>
        <input id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter your username" />

        <label htmlFor="password">Password</label>
        <input id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />

        <button disabled={isPending} >
          {isPending ? "Logging in..." : "Login"}
        </button>
        <p>{state.message}</p>
      </form>
    </div>
  );
};

export default Login;