import React from 'react'
import styled from 'styled-components'

function CategoryItems({item}) {
  return (
    <>
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOW NOW!</Button>
            </Info>
        </Container>
    </>
  )
}

export default CategoryItems

const Container = styled.div`
    flex:1;
    min-width:30vw ;
    height:80vh ;
    margin:3px ;
    position: relative ;
    /* &:hover{
        transition:all 1.3s;
        transform:scale(1.1) ;
    } */
`
const Info = styled.div`
    position:absolute;
    height:100%;
    width:100%;
    top:0 ;
    display:flex;
    align-items:center ;
    justify-content:center ;
    flex-direction:column ;
    &:hover{
        background-color: #21202070;
        transition: all 1s ;
    }
`
const Title = styled.h1`
    color:white ;
`
const Image = styled.img`
    width:100% ;
    height:100% ;
    object-fit:cover ;
`
const Button = styled.button`
    margin-top:20px ;
    font-weight:800;
    padding:10px ;
    border: none;
    background-color:white ;
    color:gray ;
    cursor:pointer ;
    font-size:15px ;
`