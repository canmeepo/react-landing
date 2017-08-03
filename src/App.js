import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import About from './About';
import Block from './Block';
import Footer from './Footer';


const Main = styled.main`
  width: 100%;
  margin: 0 auto;
`;

const Content = styled.section`
  margin: 0 auto;
  padding: 30px;
  @media screen and (min-width: 992px) {
    & {
      width: 768px;
    }
  }
`;
export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDirty: false
    };
  }

  render() {
    return (
      <Main>
        <Header />
        <Content>
          <About />
          <Block />
        </Content>
        <Footer />
      </Main>
    );
  }
}
