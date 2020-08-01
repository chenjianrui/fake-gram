import React from 'react';
import styled from 'styled-components'

import Title from './components/Title'
import UploadForm from './components/UploadForm'
import ImageGrid from './components/ImageGrid'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

function App() {
  return (
    <Container>
      <Title />
      <UploadForm />
      <ImageGrid />
    </Container>
  );
}

export default App;
