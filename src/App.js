import React, { useState } from 'react';
import styled from 'styled-components'

import Title from './components/Title'
import UploadForm from './components/UploadForm'
import ImageGrid from './components/ImageGrid'
import Modal from './components/Modal'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

function App() {
  const [ selectedImg, setSelectedImg ] = useState(null)
  return (
    <Container>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </Container>
  );
}

export default App;
