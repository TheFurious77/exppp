import React from 'react'
import './Card.css'
import {LuMoreHorizontal} from 'react-icons/lu';

const Card = ({ id, title, tag }) => {
  return (
    <div className="ticket-card">
      <div className="card-nav">
      <div className="card-id">{id}</div>
      <div className="imageContainer">
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="UserImage" />
      </div>
      </div>
      <div className="card-title">{title}</div>
      <div className="card-container">
      <div className="urgent-icon"><LuMoreHorizontal color="#798d84" />
      </div>
      <div className="card-tag"> <div className='tag-icon'></div>{tag}</div>
      </div>
    </div>
  )
}

export default Card