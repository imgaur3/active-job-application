import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../src/redux-modules/auth/Selectors";
import { get } from "lodash";

interface AuthWrapperProps {
  children: ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const navigate = useNavigate();
  const loggedIn = get(auth, 'loggedIn');
  // eslint-disable-next-line no-undef
  console.log(loggedIn, 'test');
  useEffect(() => {

    if (!loggedIn) {
      navigate("/sign-in");
    } else {
      navigate("/dashboard");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default AuthWrapper;
