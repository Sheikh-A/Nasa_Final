import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;
    height: 50px;
    font-size: 1.5rem;

    ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
    ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
    ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
    ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`;

const InputDate = styled.input`
  padding: 6px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  height: 50px;
  font-size: 1rem;
`;

const ImageDate = (props) => {

    return (
        <div>
            <InputDate id="date-input"></InputDate>
            <Button type="primary" id="set-date" onClick={props.pickDate}>Enter Date YYYY-MM-DD</Button>
        </div>
    )
}

export default ImageDate
