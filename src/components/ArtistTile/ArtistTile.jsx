import React from 'react'
import artist from "../../data/artist";
import "./ArtistTile.scss"

const ArtistTile = () => {
 
  return (
    <section className='artistTile'>
      
      <div className="artistTile__img" style={{backgroundImage: `url(${artist.strArtistThumb})`}}>
      <div className='bgcolor'>
      <h2 className='artistTile__name'>{artist.strArtist}</h2>
      <button className='artistTile__button'>Find out more</button>
      
      </div>
      </div>
      
    </section>
    
    
  )
}

export default ArtistTile
