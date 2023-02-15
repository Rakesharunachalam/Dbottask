import React from 'react'

function ViewUser(props) {
  return (
    <div className='view-user'>
      <h1 className='view-head'>View User List</h1>
      <table className='table-list'>
        <thead>
          <tr>
            <td><b>Name</b></td>
            <td><b>User Name</b></td>
            <td><b>Action</b></td>
          </tr>
        </thead>
        <tbody>
          {props.users.length>0?(props.users.map((user)=>(
            <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button onClick={()=>props.editRow(user)} className='btn-table'>Edit</button>
              <button onClick={()=>props.deleteUser(user.id)}
               className='btn-table'>Delete</button>
            </td>
          </tr>
          ))):(
            <tr>
              <td>No Users</td>
            </tr>
          )}
          
        </tbody>
      </table>

    </div>

    
  )
}

export default ViewUser