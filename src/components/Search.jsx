import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a User' />
      </div>

      <div className="userChat">
        <img src="https://images.pexels.com/photos/16084795/pexels-photo-16084795/free-photo-of-city-fashion-people-woman.jpeg?auto=compress&cs=tinysrgb&w=800" alt="img"/>
        <div className='userChatInfo'>
          <span>Chinki</span>
        </div>
      </div>
    </div>
  )
}

export default Search
