import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
  h1{
    color: #efb6b2;
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-weight: normal;
  }
  h2, p {
    text-align: center;
  }
  h2 {
    margin-top: 60px;
    font-size: 2.6rem;
  }
`

const Title = () => {

  return (
    <TitleContainer>
      <h1>FakeGram</h1>
      <h2>Your Pictures</h2>
      <p>Everything is your life.</p>
    </TitleContainer>
  )
}

export default Title