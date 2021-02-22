import React from 'react';
import Notification from '../../componentes/Notification';
import Spotlights from '../../componentes/Produtos';

import { Container } from './styles';

const Home = () => {
    return (
      <>
        <Notification />
        <Container>
          <h2> Destaques no Empório</h2>
          <Spotlights />
        </Container>
      </>
    );
  };
  
  export default Home;