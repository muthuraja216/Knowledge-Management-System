import React,{useState,useEffect} from 'react'
import'./Admin.css'
import '../index.css'
import  axios from 'axios'
import { Link } from 'react-router-dom'
export const Admin = () => {
    const[post,setPost]=useState([])
    const[name,setName]=useState('')
    const[score,setscore]=useState()
    const[iq,setiq]=useState()
    const[image,setimage]=useState()
    useEffect(()=>{
        axios.get('http://localhost:3001/Students')
        .then(res=>setPost(res.data))
        .catch(err=>console.log(err))
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        if( name == null || score == null||iq == null || image==null)
        alert("Enter valid Data")
    else
        axios.post(`http://localhost:3001/Students`,{"name":name,"score":score,"iq":iq,"image":image})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    const handleDelete=(id) => {
        axios.delete(`http://localhost:3001/Students/${id}`)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    const[popup,setPopup]=useState(false)
    const[id1,setId1]=useState()
    const[name1,setname1]=useState('')
    const[score1,setscore1]=useState()
    const[iq1,Setiq1]=useState()
    const[image1,Setimage1]=useState()


    const openpopup=(datas)=>{
        setPopup(true)
        setId1( datas.id)
        setname1( datas.name)
        setscore1(datas.score)
        Setiq1(datas.iq)
        Setimage1(datas.image)
    }
    let handleupdate = () =>{
        axios.put(`http://localhost:3001/Students/${id1}`,{
            "id":id1,
            "name":name1,
            "score":score1,
            "iq":iq1,
            "image":image1
          })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    
  return (
    <div  className='admin-form'>
        <form  onSubmit={handleSubmit}>
           
            <label>Name:</label>
            <input className=''  type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
            <label>Score:</label>
            <input className=''  type="number" value={score} onChange={(e)=>setscore(e.target.value)}/><br></br>
             <label>Iq:</label>
            <input className=''  type="text" value={iq} onChange={(e)=>setiq(e.target.value)}/><br></br>
            <label>image Url:</label>
            <input className=''  type="text" value={image} onChange={(e)=>setimage(e.target.value)}/><br></br>

            <button type='submit'>submit</button>

        </form >
        <table style={{marginLeft:'300px',marginTop:'30px'}}>
             <thead>
                   <tr>
                        <th>user id</th>
                        <th>Name</th>
                        <th>score</th>
                        <th>iq</th>
                        <th>user image</th>
                        <th>Action</th>
                   </tr>
             </thead>
             <tbody >
                {post.map(x=>(
                <tr>
                      <td>{x.id}</td>
                      <td>{x.name}</td>
                      <td>{x.score}</td>
                      <td>{x.iq}</td>
                      <td>{<img className="image-user" alt="user profile" src={x.image} height={150} width={150} />}</td>
                      <td>
                        <button style={{width:'200px'}}onClick={()=>{
                            openpopup(x)
                        } 
                        }>Update</button>  
                        <button  style={{width:'200px'}} onClick={()=>handleDelete(x.id)}>Delete</button>
                      </td>
                   </tr>
                   ))}
             </tbody>
         </table>
         {popup && 
         <div>  
            <form>
            <button onClick={()=>{setPopup(false)}}>X</button>
            <label>user ID:</label>
            <input type="number" value={id1} onChange={(e)=>setId1(e.target.value)}/><br></br>
            <label>Name:</label>
            <input type="text" value={name1} onChange={(e)=>setname1(e.target.value)}/><br></br>
            <label>score</label>
            <input type="number" value={score1} onChange={(e)=>setscore1(e.target.value)}/><br></br>
            <label>iq</label>
            <input type="text" value={iq1} onChange={(e)=>Setiq1(e.target.value)}/><br></br>
            <label>image</label>
            <input type="text" value={image1} onChange={(e)=>Setimage1(e.target.value)}/><br></br>
            <button type='submit' onClick={handleupdate}>submit</button>
        </form >
        </div>}    
        <div className='view-score'>
          <div className='view-score-item'>
          <h2>click below button to view user's score</h2><br></br>
            <Link className='viewscore-link' to="/Score">Test score</Link><br></br>
          </div>
        </div>
        
    </div>
  )
}