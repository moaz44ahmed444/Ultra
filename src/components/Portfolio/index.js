import React, { useEffect, useState } from 'react'
import { Image, ImageWrapper, Overlay, OverlaySpan, PortfolioItem, PortfolioList, PortfolioSection, PortfolioTitle, Span } from './style.js'
import axios from 'axios'

function Portfolio() {

  const [ images, setImages ] = useState([])

  useEffect( () => {
    axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
  }, [] )

  const portfolioImages = images.map( (imageItem) => {
    return (
      <ImageWrapper key = {imageItem.id}> 
        <Image src={imageItem.image} alt=""/>
        <Overlay>
            <OverlaySpan>
                Show Image
            </OverlaySpan>
        </Overlay>
      </ImageWrapper>
    )
  })

  return (
    <PortfolioSection>
    <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
    <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem >HTML</PortfolioItem>
        <PortfolioItem >Photoshop</PortfolioItem>
        <PortfolioItem >Wordpress</PortfolioItem>
        <PortfolioItem >Mobile</PortfolioItem>
    </PortfolioList>
    
    <div class="box">
        {portfolioImages}
    </div> 
    
</PortfolioSection>
  )
}

export default Portfolio