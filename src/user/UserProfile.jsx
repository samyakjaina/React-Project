import { useNavigate } from "react-router-dom";
import { UseAuth } from "../auth/UseAuth.jsx";

function UserProfile() {
  const navigate = useNavigate();
  const { logout ,authenticatedSession} = UseAuth();
  console.log("Authenticated session in UserProfile:", authenticatedSession);
  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <div className="profile-menu">
      <button className="profile-button" aria-label="Open profile menu">
        <span aria-hidden="true">👤</span>
      </button>

      <div className="profile-dropdown">
        <button onClick={() => navigate("/profile")}>{authenticatedSession?.username || "Profile"}</button>
        <button onClick={() => navigate("/settings")}>Settings</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default UserProfile;