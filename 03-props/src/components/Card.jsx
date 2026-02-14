import React from 'react'

const Card = (props) => {

    console.log(props);
    
  return (
    <div className='parent'>
      
      <div className="card">
        <img src={props.img}></img>
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit ullam reprehenderit voluptatum saepe placeat repellat vitae animi ad?</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card