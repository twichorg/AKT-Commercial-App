import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
display: flex;
background-color: BlanchedAlmond;
padding: 5px;
${mobile({"flex-direction":"column"})}
`

const Title = styled.h3`
font-size: 1.5em;
font-weight: bold;
margin-bottom: 0.5em;
`

const List= styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
font-size: 1.1em;
font-weight: bold;
width: 50%;
margin-bottom: 0.5em;
cursor: pointer;
`

const Left = styled.div`
flex: 1;
display: flex;
padding: 20px;
flex-direction: column;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({"display":"none"})}
`

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({"background-color":"lightgrey",width:"100%",ObjectFit:"cover"})}
`

const Logo = styled.h1`
`

const Desc = styled.p`
margin: 20px 0px;
`

const SocialContainer = styled.div`
display: flex;
`

const SocialIcon = styled.h1`
cursor: pointer;
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:25px;
`

const ContactItem = styled.p`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 50%;
`

const Footer = () => {
  return (
   <Container>

        <Left>
            <Logo>AKT</Logo>
            <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. </Desc>
            <SocialContainer>
                <SocialIcon color='IndianRed'>
                    <Instagram/>
                </SocialIcon>

                <SocialIcon color='CornflowerBlue'>
                    <Facebook />
                </SocialIcon>

                <SocialIcon color='DodgerBlue'>
                    <Twitter/>
                </SocialIcon>

                <SocialIcon color='Indigo'>
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
         <Title>Useful Links</Title>
          <List>
           <ListItem>Home</ListItem>
           <ListItem>Cart</ListItem>
           <ListItem>Man Fashion</ListItem>
           <ListItem>Woman Fashion</ListItem>
           <ListItem>Accessories</ListItem>
           <ListItem>My Account</ListItem>
           <ListItem>Order Tracking</ListItem>
           <ListItem>Wishlist</ListItem>
           <ListItem>Wishlist</ListItem>
           <ListItem>Terms</ListItem>
          </List>
        </Center>

        <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Ankara, Turkey
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +90 537 939 79 68
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> canaycan98@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
   </Container>
  )
}

export default Footer