import { useContext } from "react";
import { AuthContext } from "./Context.jsx";

export function UseAuth() {
    const auth = useContext(AuthContext);

    if(!auth){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return auth;
};