import React from 'react'

const KarCard = ({kar}) => {
  return (
    <li className='kar-card'>
      <img src={kar.image_url} alt="" className='kar-img'/>
      <h2>{kar.name}</h2>
      <h4>{kar.year} {kar.make} {kar.model}</h4>
    </li>
  )
}

export default KarCard