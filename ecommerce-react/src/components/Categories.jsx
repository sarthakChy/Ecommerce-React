import React from 'react'
import styled from 'styled-components'
import {categories} from '../data'
import CategoryItems from './CategoryItems'

function Categories() {
  return (
    <>
        <Container>
            {categories.map((item)=>(
                <CategoryItems item = {item}/>
            ))}
        </Container>
    </>
  )
}

export default Categories


const Container = styled.div`
    display:flex ;
    flex-wrap:wrap;
    justify-content:space-between ;
    padding:20px ;
`