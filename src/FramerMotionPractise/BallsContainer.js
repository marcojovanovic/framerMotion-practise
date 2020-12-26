import React from 'react';
import styled from 'styled-components';
import planet1 from './images/planet.svg';
import planet2 from './images/planet-2.svg';
import planet3 from './images/planet-3.svg';
import planet4 from './images/planet-4.svg';
import { motion } from 'framer-motion';

function BallsContainer() {
  return (
    <Balldiv>
      <Ball1 
      drag={true} 
      dragElastic={1.2} 
      dragConstraints={{top:200, right:100, bottom:100, left:100}}
      whileTap={{scale:0.8}}
      src={planet1} 
      alt="" 
      
      />

      <Ball2 
      src={planet2} 
      alt="" 
      drag={true} 
      dragElastic={1.5} 
      dragConstraints={{top:500, right:100, bottom:100, left:300}}
      whileTap={{scale:0.8}}
      />
      <Ball3 
       drag={true} 
       dragElastic={1.1} 
       dragConstraints={{top:200, right:100, bottom:400, left:300}}
       whileTap={{scale:0.8}}
      src={planet3}
       alt="" />
      <Ball4 
       drag={true} 
       dragElastic={1.1} 
       dragConstraints={{top:200, right:200, bottom:200, left:300}}
       whileTap={{scale:0.8}}
      src={planet4} 
      alt="" />
    </Balldiv>
  );
}

const Balldiv = styled.div`

  

`

const Ball1 = styled(motion.img)`
  position: absolute;
  top: 10%;
  right: 22%;
  cursor: pointer;

  @media only screen and (max-width:800px){
    
    width:30%;
    top:80%;


}  
`;
const Ball2 = styled(motion.img)`
  position: absolute;
  top: 40%;
  right: 40%;
  cursor: pointer;

  @media only screen and (max-width:800px){
    
    width:30%;
    top:60%;


}  
`;
const Ball3 = styled(motion.img)`
  position: absolute;
  top: 50%;
  right: 5%;
  cursor:pointer;
  @media only screen and (max-width:800px){
    
    width:30%;
    top:70%;


}  

`;
const Ball4 = styled(motion.img)`
  position: absolute;
  top: 70%;
  right: 25%;
  cursor:pointer;

  @media only screen and (max-width:800px){
    
     width:30%;
     top:90%;


}   

`;

export default BallsContainer;
