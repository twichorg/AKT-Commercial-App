import React from 'react'
import styled  from 'styled-components';
import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import NewsLetter from './../components/NewsLetter';
import Footer from './../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../Responsive';

const Container = styled.div`
`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding:"10px",flexDirection:"column"})}
`
const ImgContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 80vh;
object-fit: cover;
${mobile({"height":"40vh"})}
`
const InfoContainer = styled.div`
flex: 1;
padding:0 50px;
${mobile({"padding":"10px"})}
`
const Title = styled.h1`
font-size: 45px;
font-weight: bold;
`
const Desc = styled.div`
font-size: 15px;
margin: 20px 0;
`
const Price = styled.span`
font-size: 40px;
font-weight: bold;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin:30px 0;
${mobile({"width":"100%"})}
`
const Filter = styled.div`
display: flex;
align-items: center;
${mobile({width:"100%",margin:"10px 0",justifyContent:"space-between"})}
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: bold;
color: black;
`
const FilterColor = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background: ${props => props.color};
margin: 0 10px;
cursor: pointer;
`
const FilterSizeOption = styled.option`
font-size: 15px;
font-weight: bold;  
`

const FilterSize = styled.select`
cursor: pointer;
margin-left: 10px;
padding: 5px;
`

const AddContainer = styled.div`
display: flex;
justify-content: space-between;
margin:30px 0;
`

const Amount = styled.span`
font-size: 20px;
font-weight: bold;
width: 30px;
height: 30px;
border-radius: 50%;
border: 1px solid blue;
text-align: center;
display:flex;
justify-content: center;
align-items: center;
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: bold;
`
const Button = styled.button`
padding: 10px;
border: 1px solid blue;
border-radius: 5px;
background: white;
color: blue;
font-weight: bold;
cursor: pointer;

&:hover{
    background-color: #ff5a5f;
    color: blue;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}
`

const Product = () => {
  return (
    <Container>
        <Announcement />

        <Navbar />

        <Wrapper>

            <ImgContainer>
                <Image src="https://i.ibb.co/19P7q40/james-feaver-KMNEk-M-Vdj-E-unsplash-removebg-1.png"/>
            </ImgContainer>

            <InfoContainer>

                <Title>Lorem İpsum</Title>

                <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. 
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Desc>
                <Price>$ 20</Price>

                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="red"></FilterColor>
                        <FilterColor color="blue"></FilterColor>
                        <FilterColor color="green"></FilterColor>

                        <FilterSize>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount> 1 </Amount>
                    <Add/>
                </AmountContainer>
                <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
         </Wrapper>
        <NewsLetter/>
       <Footer/>

    </Container>
  )
}

export default Product
