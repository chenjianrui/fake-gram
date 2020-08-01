import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);

  img {
    display: block;
    max-width: 60%;
    max-height: 80%;
    margin: 60px auto;
    box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
    border: 3px solid white;
  }
`

const Modal = ({ selectedImg, setSelectedImg }) => {

  const handleClick = e => {
    if(e.target.classList.contains('clickRef')){
      setSelectedImg(null)
    }
  }

  return (
    <ModalContainer
      className="clickRef" 
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img 
        src={selectedImg} 
        alt='pic'
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </ModalContainer>
  )
}

export default Modal