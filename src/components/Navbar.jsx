import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chit Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/16084795/pexels-photo-16084795/free-photo-of-city-fashion-people-woman.jpeg?auto=compress&cs=tinysrgb&w=800" alt="profile-pic" />
        <span>Chinki</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
