import React from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import ProductItem from './ProductItem'


function Products() {
  return (
    <>
        <Container>
            {popularProducts.map((item)=>(
                <ProductItem item={item}/>
            ))}
        </Container>
    </>          
  )
}

export default Products


const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
    padding: 20px;

`