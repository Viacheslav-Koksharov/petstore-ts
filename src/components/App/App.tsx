import { Suspense, useEffect, lazy } from "react";
import { useDispatch, useSelector}  from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchCurrentUser } from "../../redux/auth/auth-operations.js";
import message from '../../mocks/footer-message.json';
import tagline from '../../mocks/tagline.json';
import authSelectors from "../../redux/auth/auth-selectors.js";
import Container from "../Container";
import Header from '../Header';
import Footer from '../Footer';
import PrivateRoute from "../Routes/PrivateRoute.js";
import PublicRoute from "../Routes/PublicRoute.js";

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
        <Container main>
          <Container background></Container>
          <Header/>
          <Suspense fallback={<p> Loading...</p>}>
            <Routes>
              <Route path="/" element={
                <HomeView
                  tagline={tagline.tagline}
                  message={tagline.message}
                  conditions={tagline.conditions}
                />}
              />
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
          <Footer message={message.text} />
        </Container> 
      )}  
    </>
 );
}