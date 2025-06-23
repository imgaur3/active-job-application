import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthSelectors } from '../../redux-modules/auth';

type Props = {
  children: ReactNode;
};

const AuthWrapper = ({ children }: Props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const auth = useSelector(AuthSelectors.auth);

  useEffect(() => {
    if (pathname === '/') {
      if (auth.loggedIn) {
        navigate('/dashboard');
      } else {
        navigate('/sign-in');
      }
    }
  }, [auth.loggedIn, pathname, navigate]);

  return <div>{children}</div>;
};

export default AuthWrapper;
