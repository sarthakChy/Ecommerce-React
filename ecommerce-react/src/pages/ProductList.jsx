import React from 'react'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import styled from 'styled-components'
import {useLocation} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
function ProductList() {
    const location = useLocation();
    const cat = location.pathname.split('/')[2]
    const [filters,setFilters] = useState({});
    const [sort,setSort] = useState('newest');

    const handleFilter = (e)=>{
        setFilters({
            ...filters,
            [e.target.name] : e.target.value
        })
    }

    const handleSort = (e)=>{
        setSort(e.target.value)
    }

  return (
    <>
        <Navbar/>
        <Announcements/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name='color' onChange={(e)=>handleFilter(e)}>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select name='size'onChange={(e)=>handleFilter(e)}>
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
               <Select name='sort' onChange={(e)=>handleSort(e)}>
                    <Option value = 'newest' selected>Newest</Option>
                    <Option value='asc'>Price (asc)</Option>
                    <Option value='desc'>Price (desc)</Option>
               </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
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