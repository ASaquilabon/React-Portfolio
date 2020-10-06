import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import headshot from '../../assets/images/Linkedin.png'
import { PopIn } from "react-spring-pop";
import Cartographer from '../../assets/images/cartographer1.png';

//styled-components
const AboutContainer = styled.div`
    background-image: url(${Cartographer});
    border-radius: 40px;
    padding-top: 20px;
    -webkit-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    -moz-box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
    box-shadow: 4px 7px 24px 4px rgba(0,0,0,0.19);
`;
const HeaderText = styled.h1`
    text-align: center;
    font-size: 3em;
`;
const Line = styled.hr`
    width: 50%;
    margin-bottom: 40px;
    border: 1px solid grey;
`;
const Columns = styled.div`
    display: flex;
    flex-flow: nowrap;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 60px;
`;
const ImportantColor2 = styled.h2`
    opacity: 87%;
    `;
const ImportantColorP = styled.p`
    opacity: 60%;
    `;

const ImgDiv = styled.div`
    position: relative;
    margin: 50px 0 0 50px;
    display: inline-block;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 85%;
        border: 1px solid gray;
        left: 58px;
        top: -10px;
        z-index: -1;
    }
`;
const Headshot = styled.img`
    max-width: 450px;
    width: 100%;
    border-radius: 250px;
`;

const AboutText = styled.div`
    max-width: 40%;
`;

const About = () => {
    return (
        <AboutContainer>
            <HeaderText>ABOUT ME</HeaderText>
            <Line />
            <PopIn
                tension='150'
                once='true'
                threshold='1'
                mass='2'
            >
                <Columns>
                    <ImgDiv>
                        <Headshot src={headshot} />
                    </ImgDiv>
                    <AboutText>
                        <ImportantColor2><strong><i>Hello World!</i></strong></ImportantColor2>
                        <ImportantColor2>My name is <i>Archie Saquilabon</i></ImportantColor2>
                        <ImportantColorP>I'm a full stack developer who started from being a licensed pharmacy technician to web development – with a world traveling choreographer role in between. Possessing strong project and team management skills, design sense, and photography/videography skills.</ImportantColorP>
                    </AboutText>
                </Columns>
            </PopIn>
        </AboutContainer>
    )
}

export default About;
