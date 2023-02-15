import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./Components/AddUser";
import Home from "./Components/Home";
import Product from "./Components/Product";
import ViewUser from "./Components/ViewUser";
import Customer from "./Components/Customer";
import { useState } from "react";
import EditUser from "./Components/EditUser";
function App() {

  
  const userData = [
    {id:1,name:"Rakesh",username:"Rakesh Arunachalam",},
    {id:2,name:"Vijay",username:"Vijay G",},
    {id:3,name:"Bala",username:"Bala Venkatesh",}
];


const addIn = (user)=>{
  user.id = users.length +1;
  setUsers([...users,user])
};

const deleteUser = (id)=>{
setUsers(users.filter((user)=>user.id!==id))
}
const[users,setUsers] = useState(userData);
const [editing,SetEditng] = useState(false);

const Initalform = {id:null,name:"",username:""}
const[currentEditing,SetCurrentEditing] = useState(Initalform);

const editRow=(user)=>{
  SetEditng(true);
  SetCurrentEditing({id:user.id,name:user.name,username:user.username})
}

const updateUser =(id,UpdatedUser)=>{
  SetEditng(false);
  setUsers(users.map((user)=>user.id===id?UpdatedUser:user))
}


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
     <Route path="/AddUser" element={<AddUser addIn={addIn}/>}></Route>
     <Route path="/ViewUser" element={editing?(<div>
      <EditUser 
      currentEditing={currentEditing}
      updateUser={updateUser}
      SetEditng={SetEditng}
      />
     </div>):(<ViewUser editRow={editRow} deleteUser={deleteUser} users={users} />)}></Route>
     <Route path="/Product" element={<Product/>}></Route>
     <Route path="/Customer" element={<Customer/>}></Route>
    </Routes>
    </BrowserRouter>
    );
}

export default App;
