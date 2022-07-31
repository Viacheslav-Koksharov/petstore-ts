import { Suspense, useEffect, lazy } from "react";
import { useDispatch, useSelector}  from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchCurrentUser } from "../../redux/auth/auth-operations.js";
import content from '../../mocks/data/footer-content.json';
import tagline from '../../mocks/data/tagline.json';
import authSelectors from "../../redux/auth/auth-selectors.js";
import Container from "../Container";
import Header from '../Header';
import Footer from '../Footer';
import PrivateRoute from "../Routes/PrivateRoute.js";
import PublicRoute from "../Routes/PublicRoute.js";

const HomeView = lazy(() =>
  import("../../views/HomeView/HomeView" /* webpackChunkName: "HomeView" */)
);
const CustomerServiceView = lazy(() =>
  import("../../views/CustomerServiceView/CustomerService" /* webpackChunkName: "CustomerServiceView" */)
);
const PrivicyPolicyView = lazy(() =>
  import("../../views/PrivicyPolicyView/PrivicyPolicy" /* webpackChunkName: "PrivicyPolicyView" */)
);
const TermsAndConditionsView = lazy(() =>
  import("../../views/TermsAndConditionsView/TermsAndConditions" /* webpackChunkName: "TermsAndConditionsView" */)
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
              <Route path="/customer service" element={
                <CustomerServiceView/>}
              />
              <Route path="/privicy policy" element={
                <PrivicyPolicyView/>}
              />
              <Route path="/terms and conditions" element={
                <TermsAndConditionsView/>}
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
          <Footer content={content} />
        </Container> 
      )}  
    </>
 );
}