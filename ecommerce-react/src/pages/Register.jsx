import React, { useState } from 'react'
import styled from 'styled-components'
import {publicRequest} from '../Axios'
import {useNavigate} from 'react-router-dom'

function Register() {

    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
    const [email, setEmail] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    const register = async (e)=>{
        e.preventDefault()
        try {    
            
            if(confirmPass!==password){
                setError('Password Do Not Match')
                setTimeout(()=>{
                    setError('')
                },2000)
            }else{
                const res = await publicRequest.post('/auth/register',{
                    username,
                    email,
                    password
                })
                console.log(res.data)
                setMessage('User Registered')
                setTimeout(()=>{
                        navigate('/login')
                },2000)
            }    
            
        } catch (error) {
            setError(error.response.data.message)
                    setTimeout(()=>{
                        setError('')
                    },2000)
        }
    }
  return (
    <>
        <WrapContainer>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input placeholder='First Name'/>
                    <Input placeholder='Last Name'/>
                    <Input placeholder='Userame'onChange={(e)=> setUsername(e.target.value)}/>
                    <Input type='email' placeholder='Email'onChange={(e)=> setEmail(e.target.value)}/>
                    <Input type='password' placeholder='Password'onChange={(e)=> setPassword(e.target.value)}/>
                    <Input type='password' placeholder='Confirm Password'onChange={(e)=> setConfirmPass(e.target.value)}/>
                    <Error color={error? 'red' : 'teal'}>{error? error : message}</Error>  
                    <Policy>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b>
                    </Policy>
                    <Button onClick={(e)=> register(e)}>CREATE</Button>
                </Form>
            </Wrapper>
        </WrapContainer>
    </>
  )
}

export default Register

const WrapContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center ;
    width:100vw;
    height:100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
     url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') 
     right,no-repeat ;
`
const Wrapper = styled.div`
    background-color:white ;
    width:40vw ;
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
    flex-wrap:wrap;

`
const Input = styled.input`
    flex:1 ;
    min-width:40%;
    padding:10px ;
    margin:20px 10px 0px 0px ;
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
const Policy = styled.span`
    font-size:14px;
    font-weight:300 ;
    margin-top:20px;
`
const Error = styled.div`
    color:${(props)=>props.color} ;
    margin-top:10px ;
    font-weight:500 ;
`