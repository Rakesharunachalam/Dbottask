import { useState } from "react"


const EditUser = (props)=>{

    const [user,Setuser] = useState(props.currentEditing);

    const handleInputChange =(event)=>{
        const {name,value} = event.target
        Setuser({...user,[name]:value})
    }


    return(
        <div className="form">
            <h1 className='add-head'>Edit User</h1>
        <form  className='form-input' onSubmit={
            event=>{
                event.preventDefault();
                if(!user.name || !user.username)return;
                props.updateUser(user.id,user);
            }
        }>
            <label>Name</label>
            <input onChange={handleInputChange} type="text" name="name" value={user.name}></input>
            <label>User Name</label>
            <input type="text"  onChange={handleInputChange} name="username" value={user.username}/>
            <button className='form-btn'>Update User</button>
            <button className='form-btn'>Cancel</button>
        </form>
        </div>
    )
}
export default EditUser;