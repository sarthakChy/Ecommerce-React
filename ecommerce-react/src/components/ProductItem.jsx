import { FavoriteBorder, SearchRounded, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function ProductItem({item}) {
  return (
    <>
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info id='info'>
                <Icon>
                    <SearchRounded/>
                </Icon>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorder/>
                </Icon>
            </Info>
        </Container>
    </>
  )
}

export default ProductItem

const Container = styled.div`
    background-color: rgba(179, 234, 246, 0.85) ;
    position:relative ;
    flex:1;
    min-width:280px;
    height:350px;
    margin:5px ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    
    &:hover #info{
        display:flex;
        background-color: #48474743;
    }

`
const Circle = styled.div`
    background-color: #fefffbc9;
    position:absolute ;
    width:210px;
    height:210px;
    border-radius:50%;
    opacity:0.8 ;
    
`
const Image = styled.img`
    height:75% ;
    z-index:2 ;
`
const Info = styled.div`
    position:absolute ;
    width:100% ;
    height:100% ;
    display:flex ;
    justify-content:space-around ;
    align-items:center ;
    z-index:5;
    display:none;

`
const Icon = styled.div`
    cursor: pointer;
    width:60px ;
    height:60px ;
    background-color:white ;
    display:flex ;
    border-radius:50% ;
    align-items:center ;
    justify-content:center ;
    &:hover{
        transition:all 0.5s;
        transform:scale(1.16) ;
    }
`