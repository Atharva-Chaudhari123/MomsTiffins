import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useUser, useAuth, SignIn, SignUp } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileSetup from "./pages/ProfileSetup";
import MotherDashboard from "./pages/MotherDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import Home from "./pages/Home";
import ClientSignIn from "./pages/ClientSignIn";


import NavBar from "./components/Navbar";
import React from "react";
import Role from "./pages/Role";
import SSOCallback from "./pages/SSOCallback";
import SignupClient from "./pages/SignupClient";
import MotherSignin from "./pages/MotherSignin";
import MotherSignup from "./pages/MotherSignup";
import SSOCallbackMother from "./pages/SSOForMother";
import KitchenMenu from "./pages/KitchenMenu"
import { CartProvider } from './context/CartContext';
import Cart from "./pages/Cart";
import ProfileSetupClient from "./pages/ProfileSetupClient";

const Layout = () => (
  <div>
    <NavBar />
    <main className="pt-16">
      {" "}
      {/* Adjust padding if NavBar overlaps content */}
      <Outlet />
    </main>

    {/* Fixed position cart */}
    <div className="fixed bottom-4 right-4 z-50">
      <Cart />
    </div>
  </div>
);

const App = () => {
  // const { isSignedIn } = useAuth();
  // const { user } = useUser();
  // const navigate = useNavigate();
  // const [role, setRole] = useState(null);

  // useEffect(() => {
  //   if (isSignedIn && user) {
  //     const userRole = user?.unsafeMetadata?.role;
  //     setRole(userRole);

  //     if (!userRole) {
  //       navigate("/profile-setup");
  //     } else if (userRole === "mother") {
  //       navigate("/mother-dashboard");
  //     } else {
  //       navigate("/client-dashboard");
  //     }
  //   }
  // }, [isSignedIn, user, navigate]);

  return (
    <CartProvider>

      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Role />} />
          <Route path="/signin-client" element={<ClientSignIn />} />
          <Route path="/sso-callback" element={<SSOCallback />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/mother-dashboard" element={<MotherDashboard />} />
          <Route path="/signup-client" element={<SignupClient />} />
          <Route path="/signin-mother" element={<MotherSignin />} />
          <Route path="/signup-mother" element={<MotherSignup />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/menu" element={<KitchenMenu />}></Route>
          <Route path="/profile-setup-client" element={<ProfileSetupClient/>}/>
          <Route
            path="/sso-callback-for-mothers"
            element={<SSOCallbackMother />}
          />
        </Route>

      </Routes>
    </CartProvider>
  );
};

export default App;
