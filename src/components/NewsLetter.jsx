import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    flex: 1;
    height: 40vh;
    display: flex;
    background-color: #FAF0E6;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: black;
  text-align: center;
  margin: 10px;
  `

  const Desc = styled.div`
  font-size: 20px;
  font-weight: 100;
  color: black;
  text-align: center;
  margin-bottom: 20px;
  ${mobile({"tet-align":"center"})}
  `

  const InputContainer = styled.div`
  display: flex;
  border-radius: 15px;
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  ${mobile({"width":"80%"})}
  `

  const Button = styled.button`
   border-radius: 15px;
   flex: 1;
   border:none;
   background-color: #00bcd4;
   color: white;
   cursor: pointer;
  `

  const Input = styled.input`
  border-radius: 15px;
  border:none;
  font-size: 1rem;
  flex: 8;
  padding-left: 20px;
  `

const NewsLetter = () => {
  return (
       <Container>
        <Title>Title</Title>
        <Desc>This section Description </Desc>
         <InputContainer>
          <Input placeholder='Your Email'/>
            <Button>
                <Send/>
            </Button>
         </InputContainer>
       </Container>
  )
}

export default NewsLetter