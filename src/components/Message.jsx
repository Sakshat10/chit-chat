import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
       <div className="messageInfo">
        <img src="https://images.pexels.com/photos/16084795/pexels-photo-16084795/free-photo-of-city-fashion-people-woman.jpeg?auto=compress&cs=tinysrgb&w=800" alt="photo" />
        <span>just now</span>
       </div>
       <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/16084795/pexels-photo-16084795/free-photo-of-city-fashion-people-woman.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
       </div>
    </div>
  )
}

export default Message
