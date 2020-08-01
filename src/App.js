import React from 'react';
import styled from 'styled-components'

import Title from './components/Title'
import UploadForm from './components/UploadForm'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

function App() {
  return (
    <Container>
      <Title />
      <UploadForm />
    </Container>
  );
}

export default App;
