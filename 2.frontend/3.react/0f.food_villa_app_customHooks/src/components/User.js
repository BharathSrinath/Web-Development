import React, { useState } from 'react'

const User = ({name}) => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
  return (
    <div className='user-card'>
        <h1>Count1: {count1}</h1>
        <h1>Count2: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Chennai</h3>
        <h4>Contact: No phone</h4>
    </div>
  )
}

export default User