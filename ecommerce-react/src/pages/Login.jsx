import React from 'react'
import styled from 'styled-components'
function Login() {
  return (
    <>
        <WrapContainer>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='Userame'/>
                    <Input placeholder='Password'/>
                    <Button>LOGIN</Button>
                    <Links>DO NOT REMEMBER YOUR PASSWORD?</Links>
                    <Links>CREATE A NEW ACCOUNT</Links>
                </Form>
            </Wrapper>
        </WrapContainer>
    </>
  )
}

export default Login



const WrapContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center ;
    width:100vw;
    height:100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
     url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') 
     center ;
    background-size:cover;
`
const Wrapper = styled.div`
    background-color:white ;
    width:25vw ;
    padding:20px ;
`
const Title = styled.h1`
    margin-bottom:10px ;
    font-weight:300;
    font-size:26px ;
    letter-spacing:2px ;
`
const Form = styled.form`
    display:flex ;
    flex-direction:column ;

`
const Input = styled.input`
    flex:1 ;
    min-width:40%;
    padding:10px ;
    margin:10px 0px;
`
const Button = styled.button`
    margin-top:20px ;
    color:white;
    cursor: pointer;
    width:40%;
    padding:20px 15px;
    font-weight:300;
    letter-spacing:3px ;
    background-color:teal;
    border:none;
`
const Links = styled.a`
    font-size:14px;
    cursor: pointer;
    font-weight:200 ;
    margin-top:20px;
    text-decoration:underline ;

`