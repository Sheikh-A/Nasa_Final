import React from "react"
import styled from "styled-components"
import './Photo.css'


const PicTitle = styled.h1`
  display: flex;
  align-items:right;
  margin-left: 300px;
  font-size: 1.5rem;
`;

const Photo = (props) => {

    return (
        <div className="photo">
            <PicTitle>{props.title}-{props.date}</PicTitle>
            <img src={props.image} alt={props.title}></img>
            {/* <button onClick={props.photoClick}>Click for HD Image</button> */}
        </div>
    )
}

export default Photo
