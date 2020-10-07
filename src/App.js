import React from 'react';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Quilt from './assets/images/darkquilt.png';
import { Parallax } from "react-parallax";
import styled, { createGlobalStyle } from 'styled-components';
import Colombia from './assets/images/colombia2017.png';
import Waikiki from './assets/images/Waikiki.png';
import './App.css'

const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
      color: #fff
    } 
    
`;

const Background = styled.div`
    background-image: url(${Quilt});
    color: #fff;
`;
const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    
`;

function App() {
  return (
    <div className="App">
      <Background>
      <GlobalStyle />
          <Hero />
          <Container>
            <About />
            </Container>
              <Parallax bgImage={Colombia} strength={900}>
                <div style={{ height: 350 }}>
                </div>
              </Parallax>
            <Container>
            <Portfolio />
            </Container>
            <Parallax bgImage={Waikiki} strength={900}>
                <div style={{ height: 350 }}>
                </div>
              </Parallax>
        </Background>
    </div>
  );
}

export default App;
