import { useState } from "react";
import Hospital from "./Hospital.jsx";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { AuthContext } from "../auth/Context.jsx";
function Health() {

  const [healthStatus, setHealthStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const apiRequest = useApiClient();
  // const accessToken = useSelector(
  //       (state) => state.auth.accessToken
  //   );
    // const accessToken = useContext(AuthContext).authenticatedSession.accessToken;
    // console.log("Access Token from Context Store:", accessToken);
  
  const checkHealth = async () => {

    setLoading(true);
    setError("");

    try {

      const response = await fetch(
        "http://localhost:8080/product/api/health",{
          method: "GET",
          credentials: "include"
        }
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const result = await response.text();

      setHealthStatus(result);

    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }
  };
  const name = "Samyak Jain";
  const userobj = {
    name: "John Doe",
    age: 30,
    email: ""
  }
  return (
    <div>

      <h1>Health Check</h1>

      <button onClick={checkHealth}>
        Check Backend Health
      </button>
      <Hospital name = {name} age = {25}  user = {userobj} />
      {loading && (
        <p>Checking backend...</p>
      )}

      {healthStatus && (
        <p>
          Backend Response: <strong>{healthStatus}</strong>
        </p>
      )}

      {error && (
        <p>
          Error: {error}
        </p>
      )}

    </div>
  );
}

export default Health;