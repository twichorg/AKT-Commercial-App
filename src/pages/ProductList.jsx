import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from './../components/Products';
import NewsLetter from './../components/NewsLetter';
import Footer from './../components/Footer';
import { mobile } from '../Responsive';

const Container = styled.div`
`
const Title = styled.h1 `
align-self: center;
margin:20px
`
const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Filter = styled.div`
margin:20px;
${mobile({"width":"0 20px",display:"flex",flexDirection:"column"})}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-right: 10px;
    ${mobile({"font-size":"17px","margin-right":"0"})}
`
const Select = styled.select`
padding: 10px;
margin-right: 10px;
${mobile({margin:"10px 0px"})}
`

const Option = styled.option`
`

const ProductList = () => {
  return (
   <Container>
       <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
           <Filter>
           <FilterText>Filter Products</FilterText>
            <Select>
                <Option disabled selected>Color</Option>
                <Option >Yellow</Option>
                <Option >Blue</Option>
                <Option >Red</Option>
                <Option >Green</Option>
                <Option >Gray</Option>
                <Option >Purple</Option>
            </Select>

            <Select>
                <Option disabled selected>Size</Option>
                <Option >XXS</Option>
                <Option >XS</Option>
                <Option >S</Option>
                <Option >M</Option>
                <Option >L</Option>
                <Option >XL</Option>
            </Select>

           </Filter>
           <Filter>
           <FilterText>Sort Products</FilterText>
            <Select>
                <Option>Price: Low to High</Option>
                <Option>Price: High to Low</Option>
            </Select>
           </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
   </Container>
  )
}

export default ProductList