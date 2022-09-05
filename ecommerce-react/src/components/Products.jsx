import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import ProductItem from './ProductItem'
import {publicRequest} from '../Axios'

function Products({cat,filters,sort}) {

  const [products , setProducts] = useState()
  const [filterProducts , setFilterProducts] = useState()

  useEffect(()=>{
    const getPoducts = async ()=>{
      try {
        const res = await publicRequest.get(cat? `/product?category=${cat}` : `/product` ) 
        setProducts(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getPoducts(); 
  },[cat]);

  useEffect(()=>{
    filters && setFilterProducts(
      products?.filter((item)=> Object.entries(filters).every(([key,value]) => item[key].includes(value)))
    )
  },[products,cat,filters]);

  // useEffect(()=>{

  //   const sortProduct = ()=>{
  //     if(sort ==='newest'){
  //       setFilterProducts([filterProducts].sort((a,b)=> a.createdAt - b.createdAt))
  
  //     }else if(sort ==='asc'){
  //       setFilterProducts([filterProducts].sort((a,b)=> a.price - b.price))
  
  //     }else{
  //       setFilterProducts([filterProducts].sort((a,b)=> b.price - a.price))
  
  //     }
  //   }

  //   sort && sortProduct()
  // },[sort,filterProducts])

  return (
    <>  

        <Container>
            {cat? filterProducts?.map((item)=>(
              <ProductItem item={item}/>
          )) : products?.slice(0,20).map((item)=>(
            <ProductItem item={item}/>
          ))}
        </Container>
    </>          
  )
}

export default Products


const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
    padding: 20px;

`