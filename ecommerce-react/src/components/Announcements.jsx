import React from 'react'
import styled from 'styled-components'

function Announcements() {
  return (
    <>
        <MiniNews>
            Super Deal! Free Shipping on Orders over $50
        </MiniNews>
    </>
  )
}

export default Announcements


const MiniNews = styled.div`
    height: 20px ;
    background-color: #166a55;
    text-align: center ;
    color: white ;
    font-size: 18px ;
    padding:10px ;
`