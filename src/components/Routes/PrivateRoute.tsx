import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";

interface Props {
  children?: React.ReactNode;
  redirectTo: string;
}

const PrivateRoute = ({ children, redirectTo = "/login" }: Props) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <>{isLoggedIn ? children : <Navigate to={ redirectTo } />}</>;
};

export default PrivateRoute;
