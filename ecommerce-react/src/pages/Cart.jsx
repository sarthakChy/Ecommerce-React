import React from 'react'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Cart() {
  return (
    <>
      <Navbar/>
      <Announcements/>
      <Container>
        <Wrapper>
          <Title>YOUR BAG</Title>
          <CartTop>
            <TopButton filled='false'>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <Toptext>Shopping Bag(2)</Toptext>
              <Toptext>Your Wishlist(0)</Toptext>
            </TopTexts>
            <TopButton filled='true'>CHECKOUT NOW</TopButton>
          </CartTop>
          <CartProducts>
            <Left>
              <ProductDetails>
                <Image src='https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg'/>
                <Details>
                  <Name><b>Product:</b> JESSIE THUNDER SHOES</Name>
                  <Id><b>ID:</b> 98172635678</Id>
                  <Color/>
                  <Size><b>SIZE:</b> 37.5</Size>
                </Details>
                <PriceDetails>
                  <AmountContainer>
                      <Remove style={{cursor:'pointer'}}/>
                      <Amount>1</Amount>
                      <Add  style={{cursor:'pointer'}}/>
                  </AmountContainer>
                  <Price>$30</Price>
                </PriceDetails>
              </ProductDetails>
              <Hr/>
            </Left>
            <Right>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryText>Sub Total</SummaryText>
                  <SummaryPrice>$ 80</SummaryPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryText>Estimated Shipping</SummaryText>
                  <SummaryPrice>$ 5.90</SummaryPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryText>Shipping Discount</SummaryText>
                  <SummaryPrice>-$ 5.90</SummaryPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryText total='total'>Total</SummaryText>
                  <SummaryPrice total='total'>$ 80</SummaryPrice>
                </SummaryItem>
                <CheckoutBttn>CHECK OUT</CheckoutBttn>
              </Summary>
            </Right>
          </CartProducts>
        </Wrapper>
      </Container>
      <Footer/>  
    </>
  )
}

export default Cart

const Container = styled.div`
`
const Wrapper = styled.div`
  padding:20px ;
  display:flex;
  flex-direction:column;
`
const CartTop = styled.div`
  display:flex ;
  align-items:center;
  justify-content:space-between ;
  padding:20px ;
`
const Title = styled.h1`
  text-align:center ;
  font-weight:400 ;
`
const TopTexts = styled.div`
  width:20% ;
  display:flex ;
  justify-content:space-evenly ;
`
const Toptext = styled.span`
  text-decoration:underline ;

`
const TopButton = styled.button`
  font-weight:600;
  padding:13px;
  cursor: pointer;
  background-color:${(props)=>props.filled ==='true'? 'black' : 'transparent'} ;
  color: ${(props)=>props.filled ==='true'? 'white' : 'black'};
`
const CartProducts = styled.div`
  max-height:80vh ;
  display:flex;
  margin-bottom:20px ;
  
`
const Left = styled.div`
  flex:3;
  overflow:scroll ;
  overflow-x:hidden ;
  &::-webkit-scrollbar{
    width:5px ;
    border: 1px solid black;
  };
  &::-webkit-scrollbar-track {
  background: #f1f1f1;
  };
  &::-webkit-scrollbar-thumb {
  background: #bdbbbb81;
  };
`
const ProductDetails = styled.div`
  display:flex;
  flex:1;
  margin:10px ;
`
const Details = styled.div`
  display:flex ;
  flex:2 ;
  flex-direction:column ;
  justify-content:space-around ;
`
const Image = styled.img`
  width:300px;
  object-fit:contain ;
  margin-right:50px ;
`
const Name = styled.span`
`
const Id = styled.span`
`
const Color = styled.span`
  width:25px ;
  height:25px ;
  background-color: #191a76;
  border-radius:50% ;
`
const Size = styled.span`
`
const PriceDetails = styled.div`
  flex:1.5 ;
  display:flex ;
  flex-direction:column ;
  align-items:center ;
  justify-content:space-around ;
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
const Price = styled.span`
    font-size:40px;
    font-weight:200 ;
`
const Hr = styled.hr`
  border:none ;
  background:#eee ;
  height:1px ;
`
const Right = styled.div`
  flex:1 ;
  padding:20px ;
  padding-top:0 ;
  
`
const Summary = styled.div`
  border:2px solid lightgray ;
  padding:20px ;
`
const SummaryTitle = styled.h1`
  font-size:40px ;
  font-weight:400 ;
  letter-spacing:2px ;
  text-align:left ;
`
const SummaryItem = styled.div`
  display:flex ;
  justify-content:space-between ;
  margin:40px 0px ;
`
const SummaryText = styled.span`
    font-size:${(props)=>props.total ==='total' ? 24 : 18}px;
    font-weight:${(props)=>props.total ==='total' ? 500 : 300} ;
`
const SummaryPrice = styled.span`
  font-size:${(props)=>props.total ==='total' ? 24 : 18}px;
  font-weight:${(props)=>props.total ==='total' ? 500 : 300} ;

`
const CheckoutBttn = styled.button`
  padding:10px ;
  width:100% ;
  background-color:black ;
  color:white ;
  font-weight:600 ;
  letter-spacing:3px ;
`