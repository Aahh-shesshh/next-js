import React from 'react'

export default function SKillsCard(props) {
  return (
    <div className='card p-4'>
        
          <img className='w-[80px] h-[70px] mb-4' src={props.image} />
          <h3 className='text-white text-lg'>{props.name}</h3>

        
    </div>
  )
}
