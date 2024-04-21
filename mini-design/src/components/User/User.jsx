import React, { useId } from 'react'
import { useParams } from 'react-router-dom'

const Self = () => {
  const { userId } = useParams()
  return (
    <div>
      <h1 className="text-3xl text-black bg-blue-400 text-center py-5">User {userId}</h1>
    </div>
  )
}

export default Self
