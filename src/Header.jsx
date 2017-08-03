import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: red;
  color: white;
`;
export default () =>
  (<Header>
    <h1>Header</h1>
    <p>Header text</p>
  </Header>);
