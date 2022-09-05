import { Add, AddShoppingCart, Remove } from '@material-ui/icons'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {publicRequest} from '../Axios'

function SingleProduct() {
    
    const navigate = useNavigate()
    const location = useLocation()
    const id = location.pathname.split('/')[2]

    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState();
    const [size, setSize] = useState();
    const [cartProduct, setCartProduct] = useState();

    const addCart = async ()=>{
        try {
            const res = await publicRequest.post('/cart',cartProduct)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(()=>{
        const getSingleProduct = async () =>{
            try {
                const res = await publicRequest.get(`/product/find/${id}`)
                setProduct(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        getSingleProduct()
    },[id])

    useEffect(()=>{
        setCartProduct({...product,color: color,size: size, quantity: quantity})
    },[quantity,size,color,product])

  return (
    <>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <Left>
                <Image src={product?.img}/>
            </Left>
            <Right>
                <ProductTitle>{product?.title}</ProductTitle>
                <Desc>{product?.desc}</Desc>
                <Price>$ {product?.price}</Price>
                <Detailes>
                    <Filter>
                        <FilterText>Color</FilterText>
                        {product?.color.map((c)=>(
                            <FilterColor color={c} key={c} onClick={()=>setColor(c)}></FilterColor>
                        ))}
                    </Filter>
                    <Select onChange={(e)=>setSize(e.target.value)}>
                        <Option disabled selected>Size</Option>
                        {product?.size.map((s)=>(
                           <Option key={s}>{s}</Option>
                        ))}
                        
                    </Select>
                </Detailes>
                <AddContainer>
                    <AmountContainer>
                        <Remove style={{cursor:'pointer'}} onClick={()=> quantity>1 && setQuantity((prev)=> prev-1)}/>
                        <Amount>{quantity}</Amount>
                        <Add  style={{cursor:'pointer'}} onClick={()=> setQuantity((prev)=> prev+1)}/>
                    </AmountContainer>
                    <AddButton onClick={()=> addCart()}>Add To Cart</AddButton>
                </AddContainer>
            </Right>
        </Wrapper>
        <Footer/>
    </>
  )
}

export default SingleProduct

const Wrapper = styled.div`
    display:flex;
    height:80vh;
`
const Left = styled.div`
    flex:1 ;
    height:100%;
    padding:20px 0;
    display:flex ;
    justify-content:center ;
`
const Image = styled.img`
    height:80%;
    width:80% ;
    object-fit:cover ;
`
const Right = styled.div`
    flex:1 ;
    height:100% ;
    padding:20px;
`
const ProductTitle = styled.h1`
    margin:20px 0 ;
    font-weight:400 ;
`
const Desc = styled.p`
    margin:20px 0 ;
    text-align:left ;
`
const Price = styled.span`
    font-size:50px;
    font-weight:200 ;
`
const Detailes = styled.div`
    display:flex ;
    align-items:center ;
`
const Filter = styled.div`
    margin:20px 0 ;
    display:flex ;
    align-items:center ;
`
const FilterText = styled.span`
    font-size:24px;
    font-weight:300 ;
    margin-right:8px ;
`
const FilterColor = styled.div`
    height:25px ;
    width:25px ;
    cursor: pointer;
    margin-left:10px ;
    border-radius:50% ;
    background-color:${(props)=> props.color} ;
`
const Select = styled.select`
    outline:none ;
    padding:10px ;
    margin-left:40px ;
`
const Option = styled.option`
    
`
const AddContainer = styled.div`
    margin: 30px 0;
    display:flex ;
    align-items:center ;
`
const AmountContainer = styled.div`
    display:flex ;
    align-items:center ;
`
const Amount = styled.span`
    height:30px ;
    width:30px ;
    border:1px solid teal ;
    border-radius:30% ;
    font-weight:700 ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    margin:0 10px ;
`
const AddButton = styled.button`
    padding:20px ;
    border:none ;
    margin-left:50px ;
    border-radius:10% ;
    outline:none ;
    cursor: pointer;
    font-weight:500 ;
    &:hover{
        border: 2px solid teal ;
    }
`