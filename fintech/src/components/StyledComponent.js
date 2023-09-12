import React, {useState} from 'react'
import styled from "styled-components";

const BodyBlock = styled.div`
   font-size : 30px;
   color: red;
   -webkit-box-shadow: 13px 6px 15px 5px #000000; 
  box-shadow: 13px 6px 15px 5px #000000;
  padding: 20px;
  maring: 10px;
   `;
const StyledComponent = () => {
   

  return (
    <div>
      <BodyBlock>StyledComponent</BodyBlock>
    </div>
    
  )
}

export default StyledComponent;