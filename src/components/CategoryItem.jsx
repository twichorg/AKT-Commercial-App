import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 72vh;
  position: relative;
`
const Image = styled.img`
border-radius: 1rem;
width: 100%;
height: 100%;
object.fit: cover;
${mobile({"height":"45vh"})}
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
    color: Moccasin;
    margin-bottom: 20px;
`
const Button = styled.button` 
    cursor: pointer;  
    border:none;
    padding: 10px;
    background-color: Moccasin;x
    cursor: pointer;
    font-weight: bold ;
    font-size: 1.2rem;
    border-radius: 1rem;
`
const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to='products'>
     <Image src={item.img}/>
     <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
     </Info> 
     </Link> 
    </Container>
  )
}

export default CategoryItem