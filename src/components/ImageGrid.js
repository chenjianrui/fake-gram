import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import useFirestore from '../hooks/useFirestore'

const ImageContainer = styled.div`
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
`

const ImageWrap = styled(motion.div)`
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  position: relative;
  opacity: 0.8;

  img {
    min-width: 100%;
    min-height: 100%;
    max-width: 150%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images')
  return (
    <ImageContainer>
      { docs && docs.map(doc => (
        <ImageWrap 
          key={doc.id} 
          onClick={() => setSelectedImg(doc.url)} 
          whileHover={{ opacity: 1 }}
          layout
        >
          <motion.img 
            src={doc.url} 
            alt='pic'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </ImageWrap>
      )) }
    </ImageContainer>
  )
}

export default ImageGrid