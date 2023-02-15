import React, { useState } from 'react'

function AddUser(props) {

  const Initalform = {id:null,name:"",username:""}

  const [user,SetUser] = useState(Initalform);

  const handleInputChange =(event)=>{
    const {name,value} = event.target;
    SetUser({...user,[name]:value})
  }



  return (
    <div className='form'>
      <h1 className='add-head'>Add User</h1>
      <form onSubmit={
        event=>{
          event.preventDefault();
          if(!user.name || !user.username)return;
          props.addIn(user)
          SetUser(Initalform);
        }
      } className='form-input'>
      <label htmlFor='name'>NAME</label>
            <input  onChange={handleInputChange} type="text" name="name" value={user.name}></input>
            <label htmlFor='username'>USER NAME</label>
            <input onChange={handleInputChange} type="text" name="username" value={user.username}></input>
            <button className='form-btn'>Add User</button>
      </form>
    </div>
  )
}

export default AddUser;