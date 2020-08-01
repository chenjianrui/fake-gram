import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import useStorage from '../hooks/useStorage'

const ProgressBar = styled(motion.div)`
  height: 5px;
  background: #efb6b2;
  margin-top: 20px;
`

const Progress = ({ file, setFile }) => {

  const { progress, url, error } = useStorage(file);
  console.log(progress, url)
  useEffect(() => {
    if(url){
      setFile(null)
    }
  }, [url, setFile])

  return (
    <ProgressBar
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    ></ProgressBar>
  )
}

export default Progress