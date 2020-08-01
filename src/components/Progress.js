import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import useStorage from '../hooks/useStorage'

const ProgressBar = styled.div`
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
    <ProgressBar style={{ width: `${progress}%` }}></ProgressBar>
  )
}

export default Progress