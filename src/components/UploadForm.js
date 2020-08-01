import React, { useState }from 'react'
import styled from 'styled-components'

import Progress from './Progress'

const FormContainer = styled.form`
  margin: 30px auto 10px;
  text-align: center;
`

const LabelStyle = styled.label`
  display: block;
  width: 30px;
  height: 30px;
  border: 1px solid #efb6b2;
  border-radius: 50%;
  margin: 10px auto;
  line-height: 30px;
  color: #efb6b2;
  font-weight: bold;
  font-size: 24px;
    input {
      height: 0;
      width: 0;
      opacity: 0;
    }
    :hover {
      background: #efb6b2;
      color: white;
    }
`

const OutputContainer = styled.div`
  height: 60px;
  font-size: 0.8rem;
`
const ErrorDiv = styled.div`
  color: #ff4a4a;
`


const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const handleChange = e => {
    const selected = e.target.files[0]
    const types = ['image/jpeg', 'image/png']
    console.log(selected)
    if(selected && types.includes(selected.type)){
      console.log('ok')
      setFile(selected)
      setError('')
    } else {
      setFile(null)
      setError('Please select an image file (png or jpeg)')
    }
  }
  return (
    <FormContainer>
      <LabelStyle>
        <input type='file' onChange={handleChange}/>
        <span>+</span>
      </LabelStyle>
      <OutputContainer>
        {error && <ErrorDiv>{error}</ErrorDiv>}
        {file && <div>{file.name}</div>}
        {file && <Progress file={file} setFile={setFile}/>}
      </OutputContainer>
    </FormContainer>
  )
}

export default UploadForm