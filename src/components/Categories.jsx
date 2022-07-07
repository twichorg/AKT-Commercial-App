import React from 'react'
import styled from 'styled-components'
import {categories} from '../Data'
import CategoryItem from './CategoryItem';
import {mobile} from '../Responsive'


const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({padding:"0px",flexDirection:"column"})}
`

const Categories = () => {
  return (
    <Container> {categories.map(item =>(
        <CategoryItem key={item.id} item={item} />
    ))}</Container>
  )
}

export default Categories