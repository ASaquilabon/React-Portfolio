import React from 'react';
import video from '../../assets/videos/archiesaquilabon.mp4'
import Poster from '../../assets/images/AS-Banner.png'
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 30px;
`;
const VideoWidth = styled.video`
    width: 100%;
`;
const Hero = () => {
    return (
        <Wrapper>
        <header className="App-header">
        <VideoWidth autoPlay loop muted poster={Poster}>
            <source src={video} type='video/mp4' />
            <source src={video} type="video/ogg" /> 
        </VideoWidth>
        </header>
        </Wrapper>
    )
}
export default Hero; 