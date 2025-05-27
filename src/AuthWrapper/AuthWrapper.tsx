import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const getUserStatus = () => {
  // eslint-disable-next-line no-undef
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return {
    isLoggedIn: !!user.token,
    isRegistered: !!user.isRegistered,
  };
};

interface AuthWrapperProps {
  children: ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const { isLoggedIn, isRegistered } = getUserStatus();

    if (!isLoggedIn) {
      navigate("/login");
    } else if (!isRegistered) {
      navigate("/register");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default AuthWrapper;
