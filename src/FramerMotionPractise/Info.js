import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Info() {
  return (
    <InfoContent>
      <Subtitle initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>Welcome to Space</Subtitle>
      <Title
        initial={{ x:-100 }}
        animate={{ x:0 }}
        transition={{ duration: 0.8 }}
      >
        Journey into the unknown
      </Title>
      <Button whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.2, background:'teal' }}>
        Get Started
      </Button>
    </InfoContent>
  );
}

const InfoContent = styled.div`
  flex: 0.3;
`;

const Button = styled(motion.button)`
  padding: 0.5rem 1.2rem;
  margin-top: 2rem;
  border: 2px solid white;
  background: transparent;
  color: white;
  font-size: 1.5rem;
  outline: none;
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  color: white;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  color: white;
`;

export default Info;
