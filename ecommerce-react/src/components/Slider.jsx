import { ArrowLeftRounded, ArrowRightRounded } from '@material-ui/icons'
import React, {useState} from 'react'
import styled from 'styled-components'
import Slide from './Slide'
import {sliderItems} from '../data'

function Slider() {

    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction)=>{
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }
    

  return (
    <>
        <Container>
            <Arrow direction='left' onClick={()=>handleClick('left')}>
                <ArrowLeftRounded style={{fontSize:50, color:'lightgreen'}}/>
            </Arrow>
            {sliderItems.map((items)=>(
                <Wrapper slideIndex = {slideIndex}>
                    <Slide items={items}/>
                </Wrapper>
            ))} 
            
            <Arrow direction='right'>
                <ArrowRightRounded style={{fontSize:50,color:'lightgreen'}} onClick={()=>handleClick('right')}/>
            </Arrow>
        </Container>
    </>
  )
}

export default Slider


const Container = styled.div`
    display: flex ;
    width:100% ;
    height:100% ;
    overflow:hidden ;
`
const Wrapper = styled.div`
    transition: all 1.5s ease ;
    transform: translateX(${(props)=> props.slideIndex * -100 }vw) ;
    height:100vh ;
    width:100vw ;
`
const Arrow = styled.div`
    cursor:pointer;
    border-radius:50%;
    position: absolute ;
    top:0 ;
    bottom:0 ;
    left: ${props=> props.direction==='left' && '10px'} ;
    right: ${props=> props.direction==='right' && '10px'} ;
    margin:auto ;
    height: 70px ;
    width:70px ;
    display: flex;
    align-items:center;
    justify-content:center;
    z-index: 2;
    &:hover{
        background-color: #acaaaa45 ;
    }
`
