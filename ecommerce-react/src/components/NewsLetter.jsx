import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function NewsLetter() {
  return (
    <>
        <Container>
            <Wrapper>
                <Top>
                    <Title>Newsletter</Title>
                    <Desc>Get timely updates from your favotite products.</Desc>
                </Top>
                <Bottom>
                    <Input placeholder='Your Email'/>
                    <Button>
                        <Send style={{color:'white'}}/>
                    </Button>
                </Bottom>
            </Wrapper>
        </Container>
    </>
  )
}

export default NewsLetter

const Container = styled.div`
    background-color: #facdd4aa ;
    height:45vh ;
    display:flex ;
    justify-content:center ;
`
const Wrapper = styled.div`
    width:70vw ;
    height:100% ;
    display:flex;
    flex-direction:column;
    align-items:center ;
    justify-content:center ;
`
const Title = styled.h2`
    font-size:100px ;
    font-weight:700 ;
`
const Desc = styled.p`
    margin-top:20px;
    font-size:25px ;
    word-spacing:5px ;
`
const Top = styled.div`
    flex:2 ;    
    margin:3px;
    display: flex ;
    align-items:center ;
    justify-content:flex-end ;
    flex-direction:column ;
`
const Bottom = styled.div`
    flex:1 ;
    margin:3px ;
    display:flex;
    align-items:flex-start ;
`

const Input = styled.input`
    height:30px ;
    width:40vw ;
    border:1px lightgray solid ;
    outline:none ;
    padding:5px 18px;
    margin:13px 0;
`
const Button = styled.button`
    height:40px ;
    width:5vw ;
    background-color:teal ;
    border:none;
    margin:13px 0;
    cursor:pointer ;
`