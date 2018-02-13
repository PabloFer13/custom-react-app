import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
const Title = styled.h1`
  color: black;
`;

const App = () => (
  <Container>
    <Title>Hello World!</Title>
  </Container>
);

export default App;
