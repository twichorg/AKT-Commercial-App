import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: center;
  align-items: center;
  just-content: center;
  font-size: 14px;
  font-weight: bold;
`;

const Announcement = () => {
  return (
      <Container>Super Deal! Free Shipping on Orders Over $50</Container>
  )
}

export default Announcement