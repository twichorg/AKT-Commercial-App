import { Search, ShoppingBasketOutlined,  } from '@material-ui/icons'
import { Badge } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../Responsive'


// Styled Components with Container 
const Container = styled.div`
height:60px;

${mobile({height:"50px"})}
`

// Styled Components with Wrapper
const Wrapper = styled.div`
align-items:center;
padding:10px 20px;
display:flex;
justify-content:space-between;
${mobile({padding:"10px 0px"})}
`

// Language sections 
const Language = styled.div`
font-size:14px;
cursor:pointer;
${mobile({display:"none"})}
`

//Left Right Center added flex
const Left = styled.div`
flex:1;
display:flex;
align-items:center;

`
// Search Container
const SearchContainer = styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:10px;
padding:5px;
`
//Menuİtem Design 
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:20px;
${mobile({fontSize:"12px", marginRight:"15px",padding:"1px"})}
`

// Logo styled 
const Logo = styled.h1`
text-decoration:none;
cursor:pointer;
font-weight:bold;
${mobile({fontSize:"24px"})}`

// Declared the input
const Input = styled.input`
border:none;
${mobile({width:"55px"})}
`

//Center Sections
const Center = styled.div`
flex:1;
text-align:center;
`

//Right sections 
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent:"center",flex:2})}
`

const Navbar = () => {
  return (
    <Container>
     <Wrapper>
      <Left>
       <Language>EN</Language>
        <SearchContainer>
         <Input placeholder='Search'/>
         <Search style={{color:"gray", fontsize:16, cursor:"pointer"}}/>
        </SearchContainer>
      </Left>

      <Center>
     <Link to='/'><Logo>AKT</Logo></Link>
      </Center>

       <Right>
    <Link to='/register'><MenuItem>Register</MenuItem></Link>    
    <Link to='login'><MenuItem>Sign In</MenuItem></Link>    
        <MenuItem>
         <Badge badgeContent={4} color="primary">
     <Link to='/cart'><ShoppingBasketOutlined/></Link>     
         </Badge>
        </MenuItem>
       </Right>

     </Wrapper>  
    </Container>
  )
}

export default Navbar