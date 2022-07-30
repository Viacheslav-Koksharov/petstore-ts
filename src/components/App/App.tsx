import { Suspense, useEffect, lazy } from "react";
import { useDispatch, useSelector}  from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchCurrentUser } from "../../redux/auth/auth-operations.js";
import authSelectors from "../../redux/auth/auth-selectors.js";
import Container from "../Container/Container";
import AppBar from "../AppBar/AppBar";
import PrivateRoute from "../Routes/PrivateRoute.js";
import PublicRoute from "../Routes/PublicRoute.js";
import "./App.css";

const HomeView = lazy(() =>
  import("../../views/HomeView/HomeView" /* webpackChunkName: "HomeView" */)
);
const RegisterView = lazy(() =>
  import("../../views/RegisterView/RegisterView" /* webpackChunkName: "RegisterView" */)
);
const LoginView = lazy(() =>
  import("../../views/LoginView/LoginView" /* webpackChunkName: "LoginView" */)
);
const StoreView = lazy(() =>
  import("../../views/StoreView/StoreView" /* webpackChunkName: "StoreView" */)
);

export default function App() {
  const dispatch:any = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  
  return (
    <>  
      {!isFetchingCurrentUser && (
        <Container>       
          <AppBar />
          <Suspense fallback={<p> Loading...</p>}>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route
                path="/register"
                element={
                  <PublicRoute redirectTo="/store" restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"              
                element={
                  <PublicRoute redirectTo="/store" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="/store"
                element={
                  <PrivateRoute redirectTo="/login">
                    <StoreView />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>    
        </Container> 
      )}  
    </>
 );
}