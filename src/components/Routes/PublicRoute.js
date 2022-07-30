import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors.js";

export default function PublicRoute({
  children,
  redirectTo = "/",
  restricted = false,
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}
