import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'

function SingleProduct() {
  return (
    <>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <Left>
                <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
            </Left>
            <Right>
                <ProductTitle>Denim Jumpsuit</ProductTitle>
                <Desc>
                Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, 
                </Desc>
                <Price>$20</Price>
                <Detailes>
                    <Filter>
                        <FilterText>Color</FilterText>
                        <FilterColor color='black'></FilterColor>
                        <FilterColor color='lightgrey'></FilterColor>
                        <FilterColor color='blue'></FilterColor>
                    </Filter>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Detailes>
                <AddContainer>
                    <AmountContainer>
                        <Remove style={{cursor:'pointer'}}/>
                        <Amount>1</Amount>
                        <Add  style={{cursor:'pointer'}}/>
                    </AmountContainer>
                    <AddButton>Add To Cart</AddButton>
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