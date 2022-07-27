import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "../Container/Container";
import AppBar from "../AppBar/AppBar";
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
  import("../../views/StoreView/StoreView" /* webpackChunkName: "ContactsView" */)
);

export default function App() {
  return (
      <Container>       
          <AppBar /> 
          <Suspense fallback={<p> Loading...</p>}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/register" element={<RegisterView />}/>
            <Route path="/login" element={<LoginView/>}/>
            <Route path="/store" element={<StoreView />}/>
          </Routes>
              </Suspense>
    </Container>
  );
}