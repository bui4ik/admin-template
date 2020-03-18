import React, { FunctionComponent } from 'react';
import * as S from './styles';

const AuthLayout: FunctionComponent = ({ children }) => (
  <S.Box>{children}</S.Box>
);

export default AuthLayout;
