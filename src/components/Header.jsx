import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h1 className='text-xl md:text-3xl font-medium'>Hello {props.name}!!</h1>
        <p className='md:text-xl'>I Help You Manage Your Activities :)</p>
    </div>
  )
}

export default Header