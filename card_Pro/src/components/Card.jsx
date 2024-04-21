import React from 'react'

const Cards = ({name = "Shawn", address = "Ajah", school = "front"}) => {
  return (
    <div className='flex bg-blue-300 rounded gap-4 my-3 rounded-md p-2'>
        <div className="item-center">
            <img src="" alt="Image is here" />
        </div>
        <div className="flex text-2xl font-serif gap-3">
            <h3 className="text-2xl">This is a card</h3>
            <p className="text-xl">{name}</p>
            <p className="text-green-200 font-bold">{address}</p>
            <p className="text-3xl">{school}</p>
        </div>
      
    </div>
  )
}

export default Cards 