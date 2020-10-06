import React from 'react';
import TrynaEat from '../../assets/images/TrynaEat.png'
import GiphyAPI from '../../assets/images/GiphyAPI.png'
import UrbanLA from '../../assets/images/UrbanLAStudio.png'
import SBU from '../../assets/images/SBUBeats.png'
import Cartographer from '../../assets/images/cartographer1.png';
import { PopIn } from "react-spring-pop";
import styled from 'styled-components';
import './portfolio.css'

const HeaderText = styled.h1`
    padding-top: 40px;
    text-align: right;
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
    -webkit-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    -moz-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
`;
const Featured = styled.img`
    max-width: 1050px;
    width: 100%;
    border-radius: 50px;
    -webkit-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    -moz-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
`;
const Icons = styled.img`
    max-width: 100%;
    border-radius: 41px;
    -webkit-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    -moz-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    padding-bottom: 40px;
`;
const Portfolio = () => {
    return (
        <PortfolioContainer>
            <HeaderText>Portfolio</HeaderText>
            <div class="portfolio">
                <Line />
                <PopIn
                    tension='500'
                    once='true'
                    threshold='1'
                    mass='5'
                >
                    <div class="content">
                        <a href="https://asaquilabon.github.io/Random-Food-Button/" target="_blank">
                            <div class="content-overlay"></div>
                            <Featured class="content-image" src={TrynaEat} />
                            <div class="content-details fadeIn-top">
                                <ProjectTitle>Tryna Eat?!</ProjectTitle>
                                <p><strong>Main Objective: </strong>
                                 Eliminate the day to day issue of not ever knowing what to eat!</p>
                                 <h4><strong>Technolgies Used:</strong></h4>
                                 <UlText>
                                     <LiText>ReactJS</LiText>
                                     <LiText>Yelp Fusion API</LiText>
                                     <LiText>CORS</LiText>
                                     <LiText>Axios</LiText>
                                 </UlText>
                            </div>
                        </a>
                    </div>
                </PopIn>
                <Bottom>
                    <PopIn
                        tension='100'
                        once='true'
                        threshold='1'
                        mass='3'
                    >
                        <div class="content">
                            <a href="https://asaquilabon.github.io/GiphyAPI/" target="_blank">
                                <div class="content-overlay"></div>
                                <Icons class="content-image" src={GiphyAPI}  />
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
                    <PopIn
                        tension='100'
                        once='true'
                        threshold='1'
                        mass='3'
                    >
                        <div class="content">
                            <a href="http://urbanlastudio.com/" target="_blank">
                                <div class="content-overlay"></div>
                                <Icons class="content-image" src={UrbanLA} />
                                <div class="content-details fadeIn-top">
                                    <h3>UrbanLAStudio.com</h3>
                                    <h4>Technolgies Used:</h4>
                                 <UlText>
                                     <LiText>HTML + CSS</LiText>
                                     <LiText>Javascript</LiText>
                                     <LiText>W3 Schools CSS</LiText>
                                 </UlText>
                                </div>
                            </a>
                        </div>
                    </PopIn>
                    <PopIn
                        tension='100'
                        once='true'
                        threshold='1'
                        mass='3'
                    >
                        <div class="content">
                            <a href="https://asaquilabon.github.io/SBU/" target="_blank">
                                <div class="content-overlay"></div>
                                <Icons class="content-image" src={SBU} />
                                <div class="content-details fadeIn-top">
                                    <h3>SBU Website Wireframe</h3>
                                    <h4>Technolgies Used:</h4>
                                 <UlText>
                                     <LiText>HTML + CSS</LiText>
                                     <LiText>Javascript</LiText>
                                     <LiText>Materialize UI</LiText>
                                     <LiText>Soundcloud</LiText>
                                 </UlText>
                                </div>
                            </a>
                        </div>
                    </PopIn>
                </Bottom>
            </div>
        </PortfolioContainer>
    )
}
export default Portfolio; 