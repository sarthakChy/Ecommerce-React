import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingBasketOutlined, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core'


function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{fontSize:16,color:'gray'}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>SCHY.</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge color='primary' badgeContent={4}>
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}


const Container = styled.div`
    height: 30%;

`
const Wrapper = styled.div`
    padding: 15px 20px ;
    display:flex;
    justify-content:space-between;
    align-items:center ;

`
const Language = styled.span`
    font-size: 15px ;
    cursor: pointer;
`
const Input = styled.input`
    border: none ;
    outline:none ;
    width:90% ;
`
const SearchContainer = styled.div`
    border: 0.5px lightgray solid ;
    margin-left: 30px ;
    width:60% ;
    display:flex;
    align-items:center;
    justify-content:space-between ;
    padding: 5px 15px ;
`
const Left = styled.div`
    flex: 1 ;
    display: flex;
    align-items:center ;

`
const MenuItem = styled.div`
    cursor: pointer;
    font-size:18px ;
    margin-left:30px ;
    margin-right:10px ;
`
const Right = styled.div`
    flex: 1 ;
    display:flex;
    justify-content:flex-end;
    padding:0px 10px;
    align-items: center ;
`
const Logo = styled.h1`
    font-weight:900;
`
const Center = styled.div`
    flex: 1 ;
    text-align:center ;
`



export default Navbar