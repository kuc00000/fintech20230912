import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const HeaderComponent = () => {
  return (
    <Header>
      <h1>News App</h1>
    </Header>
  );
};

export default HeaderComponent;