import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import {publicRequest} from '../Axios';
import {useDispatch, useSelector} from 'react-redux'
import {loginFailure,loginStart, loginSuccess} from '../redux/userRedux'


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {isFetching, error} = useSelector((state)=> state.user)
    const dispatch = useDispatch();

    const login = async (e)=>{
        e.preventDefault();
        // dispatch(loginStart())
        try {
            const res = await publicRequest.post('/auth/login',{
                username,
                password
            })
            console.log(res.data)     
            dispatch(loginSuccess(res.data))   
        } catch (error) {
            dispatch(loginFailure(error.response.data.message))
        }
    }
  return (
    <>
        <WrapContainer>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='Userame' onChange={(e)=> setUsername(e.target.value)}/>
                    <Input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
                    <Button onClick={(e)=> login(e)} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>{error}</Error>}
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
    &:disabled{
        color: teal;
        cursor: not-allowed;
    }
`
const Links = styled.a`
    font-size:14px;
    cursor: pointer;
    font-weight:200 ;
    margin-top:20px;
    text-decoration:underline ;

`
const Error = styled.span`
    color:red ;
    margin-top:10px ;
`