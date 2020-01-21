import React from "react"
import styled from "styled-components";

const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const ExplanationText = styled.section`
font-size: 1.5rem;
padding: 50px;

`;

const TextBox = (props) => {
    return (
      <Container>

      <div>
        <ExplanationText>{props.explanation}</ExplanationText>
    </div>
    </Container>
    )
}

export default TextBox
