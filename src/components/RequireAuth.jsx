import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const isAuthed = localStorage.getItem("jobnest-auth") === "true";
  const location = useLocation();

  if (!isAuthed) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;

