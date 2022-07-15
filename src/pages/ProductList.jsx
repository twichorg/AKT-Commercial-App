import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from './../components/Products';
import NewsLetter from './../components/NewsLetter';
import Footer from './../components/Footer';

const Container = styled.div`
`
const ProductList = () => {
  return (
   <Container>
       <Navbar/>
        <Announcement/>
        <Products/>
        <NewsLetter/>
        <Footer/>
   </Container>
  )
}

export default ProductList