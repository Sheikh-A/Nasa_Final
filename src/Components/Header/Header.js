import React from "react";
import styled from 'styled-components';
import './Header.css';

const logo = 'https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png';

const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const NasaImg = styled.img`
  height: 250px;
  width: 500px;
`;

const Header = () => {

    return (
      <Container>
        <header className="logo-header">
            <NasaImg height="10px" src={logo}></NasaImg>
            <h1>Astronomy Picture of the Day</h1>
        </header>
      </Container>

    )

}

export default Header
