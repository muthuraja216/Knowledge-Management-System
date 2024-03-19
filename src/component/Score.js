import React,{useState,useEffect} from 'react'
import axios from 'axios'

export const Score = () => {
    const[post,setPost]=useState([])
    const[username,setUsername]=useState('')
    const[score,setscore]=useState('')
    useEffect(()=>{
        axios.get('http://localhost:3001/score')
        .then(res=>setPost(res.data))
        .catch(err=>console.log(err))
    })
  return (
    <div>
        <table style={{marginLeft:'300px',marginTop:'30px'}}>
             <thead>
                   <tr>
                        <th>user Name</th>
                        <th>score</th>
                   </tr>
             </thead>
             <tbody >
                {post.map(x=>(
                <tr>
                      <td>{x.user}</td>
                      <td>{x.score}</td>
                   </tr>
                   ))}
             </tbody>
         </table>
    </div>
  )
}
