import React from 'react'
import styled from 'styled-components';
import { mobile } from '../Responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

  const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  `

  const Wrapper = styled.div`
  width: 35%;
  padding: 20px;
  background-color: white;
  border-radius: 25px;
  ${mobile({"width":"80%"})}
  `

  const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  `

  const Form = styled.form`
   display: flex;
   flex-direction: column;
  `

  const Input = styled.input`
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  `
const Link = styled.a`
    font-size: 0.8rem;
    margin-top: 10px;
    text-decoration: underline;
    color: teal;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
    <Wrapper>
     <Title>Sign In</Title>
     <Form>
         <Input placeholder='username'/>
         <Input placeholder='password'/>
         <Button>Log In</Button>
         <Link>Do Not Yo Remembered  The Password</Link>
         <Link>Create A New Account</Link>
     </Form>
    </Wrapper>
</Container>
  )
}

export default Login