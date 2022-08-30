import React from 'react'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import styled from 'styled-components'

function ProductList() {
  return (
    <>
        <Navbar/>
        <Announcements/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
               </Select>
            </Filter>
            <Filter>
               <FilterText>Sort Products:</FilterText> 
               <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
               </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </>
  )
}

export default ProductList

const Title = styled.h1`
    padding:20px ;
    margin-left:20px ;
`
const FilterContainer = styled.div`
    padding:20px ;
    display:flex;
    justify-content:space-between ;
`
const Filter = styled.div`
    margin:20px ;
`
const FilterText = styled.span`
    font-size:24px;
    font-weight:600 ;
`
const Select = styled.select`
    outline:none ;
    padding:10px ;
    margin-left:20px ;
`
const Option = styled.option`
    
`