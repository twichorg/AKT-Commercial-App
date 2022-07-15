import React, { useState } from 'react'
import styled from 'styled-components'
import {popularProducts} from '../Data'
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Select = styled.select`
padding: 10px;
margin-right: 10px;`

const Option = styled.option``

const FilterText = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-right: 10px;
`


const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin:20px;
    align-items: center;
`

const Products = () => {

  const [value, setValue] = useState(''); // value is the selected value of the select

  const handleChange = (e) => {   // handleChange is the function that is called when the select value changes
    setValue(e.target.value);
  }

  return (
    <>
    <FilterContainer>
    <FilterText>Filter Products</FilterText>
    <Select onChange={handleChange}>
      <Option disabled selected >Brand</Option>
      <Option>Prada</Option>
      <Option>Rocket</Option>
      <Option>chip</Option>
      <Option>Bruno</Option>
    </Select>
    </FilterContainer>
    
    <Container>
      {popularProducts
      .filter(product => product.title.toLowerCase().includes(value.toLowerCase())) // filter the products based on the selected value
      .map((item) => (
      <Product item={item} value={item.title} key={item.id} />
      ))}
    </Container>
    </>
  )
}

export default Products