import React from "react"
import Video from '../Video/Video'
import Photo from '../Photo/Photo'
import styled from 'styled-components'

import './Image.css'

const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const TitleText = styled.p`
  align-items:center;
  font-size: 1.5;
`;



const Image = (props) => {

    return (
      <Container>
        <div className="astro-image">
            {props.isVideo ? (
                <Video
                    clicked={props.videoClick}
                    image={props.image}
                    title={props.title}
                    date={props.date} />
            ) : (
                    <Photo
                        clicked={props.photoClick}
                        image={props.image}
                        title={props.title}
                        date={props.date}
                    />
                )}
        </div>
        </Container>
    )
}

export default Image
