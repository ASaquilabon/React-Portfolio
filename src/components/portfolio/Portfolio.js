import React from "react";
import TrynaEat from "../../assets/images/TrynaEat.png";
import GiphyAPI from "../../assets/images/GiphyAPI.png";
import Pokedex from "../../assets/images/React-Pokedex.jpg";
import Cartographer from "../../assets/images/cartographer1.png";
import { PopIn } from "react-spring-pop";
import styled from "styled-components";
import "./portfolio.css";
import CookingWithReact from "../../assets/images/cooking-with-react.jpg";
import WordleClone from "../../assets/images/Wordle-Clone.jpg";

const HeaderText = styled.h1`
  padding-top: 40px;
  text-align: center;
  font-size: 3em;
`;
const ProjectTitle = styled.h2`
  color: #fff;
`;
const UlText = styled.ul`
  list-style: none;
`;
const LiText = styled.li`
  margin-right: 2.5em;
`;
const Line = styled.hr`
  width: 50%;
  margin-bottom: 40px;
  opactiy: 60%;
  border: 1px solid grey;
`;
const PortfolioContainer = styled.div`
  background-image: url(${Cartographer});
  border-radius: 40px;
  -webkit-box-shadow: 4px 7px 24px 4px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 4px 7px 24px 4px rgba(0, 0, 0, 0.19);
  box-shadow: 4px 7px 24px 4px rgba(0, 0, 0, 0.19);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
`;
const Featured = styled.img`
  max-width: 1050px;
  width: 100%;
  border-radius: 50px;
  -webkit-box-shadow: 4px 7px 24px 4px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 4px 7px 24px 4px rgba(0, 0, 0, 0.19);
  box-shadow: 4px 7px 24px 4px rgba(0, 0, 0, 0.19);
  margin-bottom: 20px;
`;
const Icons = styled.img`
  max-width: 100%;
  border-radius: 41px;
  -webkit-box-shadow: 4px 7px 24px 4px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 4px 7px 24px 4px rgba(0, 0, 0, 0.19);
  box-shadow: 4px 7px 24px 4px rgba(0, 0, 0, 0.19);
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 40px;
`;

const Top = styled.div`
  // display: flex;
  // flex-flow: column;
  // justify-content: center;
`;
const Portfolio = () => {
  return (
    <PortfolioContainer>
      <HeaderText>Portfolio</HeaderText>
      <div class="portfolio">
        <Line />
        <Top>
          <PopIn tension="500" once="true" threshold="1" mass="5">
            <div class="top-content">
              <div class="top-content-overlay"></div>
              <a
                href="https://asaquilabon.github.io/Random-Food-Button/"
                target="_blank"
              >
                <Featured class="content-image" src={TrynaEat} />
                <div class="content-details fadeIn-top">
                  <ProjectTitle>Tryna Eat?!</ProjectTitle>
                  <h4>
                    <strong>Main Objective:</strong>
                  </h4>
                  <p class="objective_text">
                    Eliminate the day to day issue of not ever knowing what to
                    eat
                  </p>
                  <h4>
                    <strong>Technolgies Used:</strong>
                  </h4>
                  <UlText>
                    <LiText>ReactJS</LiText>
                    <LiText>Yelp Fusion API</LiText>
                    <LiText>AWS Lambda Proxy Integrations for CORS </LiText>
                    <LiText>Axios</LiText>
                  </UlText>
                </div>
              </a>
            </div>
          </PopIn>
          <PopIn tension="500" once="true" threshold="1" mass="5">
            <div class="top-content">
              <a
                href="https://sleepy-mclean-fd063d.netlify.app/"
                target="_blank"
              >
                <div class="top-content-overlay"></div>
                <Featured class="content-image" src={CookingWithReact} />
                <div class="content-details fadeIn-top">
                  <ProjectTitle>Cooking With React</ProjectTitle>
                  <h4>
                    <strong>Main Objective:</strong>
                  </h4>
                  <p class="objective_text">
                    Create a list of recipes stored on the local storage. You're
                    able to create, read, update, and delete stored data. This
                    application is also a continuous deployment application
                    hosted on Netlify.
                  </p>
                  <h4>
                    <strong>Technolgies Used:</strong>
                  </h4>
                  <UlText>
                    <LiText>React.JSX</LiText>
                    <LiText>React Hooks</LiText>
                    <LiText>Local Storage</LiText>
                    <LiText>Netlify</LiText>
                    <LiText>CSS Grid</LiText>
                    <LiText>UUID for Unique Keys</LiText>
                  </UlText>
                </div>
              </a>
            </div>
          </PopIn>
        </Top>
        <Bottom>
          <PopIn tension="100" once="true" threshold="1" mass="3">
            <div class="bottom-content">
              <a
                href="https://asaquilabon.github.io/Wordle-Clone/"
                target="_blank"
              >
                <div class="bottom-content-overlay"></div>
                <Icons class="content-image" src={WordleClone} />
                <div class="content-details fadeIn-top">
                  <h3>Wordle Clone</h3>
                  <h4>Technolgies Used:</h4>
                  <UlText>
                    <LiText>HTML + CSS</LiText>
                    <LiText>ES6 Javascript</LiText>
                    <LiText>CSS Grid + Flexbox </LiText>
                    <LiText>CSS Keyframes + Animations</LiText>
                  </UlText>
                </div>
              </a>
            </div>
          </PopIn>
          <PopIn tension="100" once="true" threshold="1" mass="3">
            <div class="bottom-content">
              <a href="https://asaquilabon.github.io/Pokedex/" target="_blank">
                <div class="bottom-content-overlay"></div>
                <Icons class="content-image" src={Pokedex} />
                <div class="content-details fadeIn-top">
                  <h3>React Pokedex</h3>
                  <h4>Technolgies Used:</h4>
                  <UlText>
                    <LiText>React.js JSX </LiText>
                    <LiText>ES6 Javascript</LiText>
                    <LiText>CSS Flexbox </LiText>
                    <LiText>Pokemon API + Fetch</LiText>
                  </UlText>
                </div>
              </a>
            </div>
          </PopIn>
          <PopIn tension="100" once="true" threshold="1" mass="3">
            <div class="bottom-content">
              <a href="https://asaquilabon.github.io/GiphyAPI/" target="_blank">
                <div class="bottom-content-overlay"></div>
                <Icons class="content-image" src={GiphyAPI} />
                <div class="content-details fadeIn-top">
                  <h3>Giphy API</h3>
                  <h4>Technolgies Used:</h4>
                  <UlText>
                    <LiText>HTML + CSS</LiText>
                    <LiText>Giphy API</LiText>
                    <LiText>Javacript + JQuery</LiText>
                    <LiText>AJAX</LiText>
                  </UlText>
                </div>
              </a>
            </div>
          </PopIn>
        </Bottom>
      </div>
    </PortfolioContainer>
  );
};
export default Portfolio;
