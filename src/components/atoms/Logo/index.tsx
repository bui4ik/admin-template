import React from 'react';
import Icon from 'assets/svg/logo.svg';
import * as S from './styles';

const Logo = () => (
  <S.Box>
    <S.Image src={Icon} alt="Logo" />
  </S.Box>
);

export default Logo;
