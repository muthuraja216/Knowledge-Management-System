import axios from 'axios'
import './User.css';
import React, { useEffect, useState } from 'react'
export const Users = () => {
    useEffect(()=>{
        axios.get('http://localhost:3001/Students')
            .then((res)=>{
                setUserList(res.data)
            })
            .catch((res)=>{
                console.log("Error"+res)
            })
      },[])
    
      const [userlist, setUserList] = useState([])
    
  return (
    <div className='user-container'>
    {userlist.map(x=>(
      <div className='single-user'>
      <img className="image-user" alt="user profile" src={x.image} height={100} width={100} />
      <div className='details-user'>
      <h4>User Id:{x.id}</h4>
      <h4>Name:{x.name}</h4>
      <h4>score:{x.score}</h4>
      <h4>Iq:{x.iq}</h4>
      </div>
    </div>
    ))}
      
  </div>
  )
}
