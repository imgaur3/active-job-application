import React from 'react';
import { ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { get, isEmpty } from 'lodash';

import { AuthSelectors } from '../../redux-modules/auth';

type Props = {
  children: ReactNode;
};

const AuthWrapper = ({ children }: Props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const auth = useSelector(AuthSelectors.auth);

  // eslint-disable-next-line no-undef
  console.log(auth, 'wrapper');

  useEffect(() => {
    if (pathname === '/' && auth && !isEmpty(get(auth, 'user.email'))) {
      navigate('/dashboard');
    } else if (pathname === '/') {
      navigate('/sign-in');
    }
  }, [auth, pathname, navigate]);

  return <div>{children}</div>;
};

export default AuthWrapper;
