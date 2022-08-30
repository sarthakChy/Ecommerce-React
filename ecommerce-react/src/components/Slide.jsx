import React from 'react'
import styled from 'styled-components'

function Slide({items}) {
  return (
    <>  
        <Wrapper bg={items.bg}>
            <Left>
                <Image src={items.img}/>
            </Left>
            <Right>
                <Title>{items.title}</Title>
                <Desc>{items.desc}</Desc>
                <Button>SHOW NOW</Button>
            </Right>
        </Wrapper>
    </>
  )
}

export default Slide

const Wrapper = styled.div`
    display:flex ;
    height:100vh ;
    width:100vw ;
    background-color: #${props => props.bg} ;

`
const Image = styled.img`
    width:100% ;
    height:100% ;
`
const Left = styled.div`
    flex:1;
    padding: 50px ;

`
const Title = styled.h1`
    font-size:70px ;
`
const Desc = styled.p`
    margin:50px 0px ;
    font-size:20px ;
    font-weight:500 ;
    letter-spacing:5px ;

    
`
const Button = styled.button`
    padding:15px ;
    font-size:20px ;
    background-color:transparent ;
    cursor:pointer ;
`
const Right = styled.div`
    flex:1 ;
    display: flex ;
    align-items:flex-start ;
    flex-direction:column ;
    justify-content:center ;
`