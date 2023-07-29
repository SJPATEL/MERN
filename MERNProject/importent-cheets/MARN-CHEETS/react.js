

==========> create react app: npx create-react-app appName
=>install json file: npm inti -y
=>cls : clin console


=====> vs code extention

=>install concurrently: npm i react - router - dom concurrently(it is use for run in dome at a time react and mongoose server )
"scripts": {
    "both" : "concurrently \"npm run start\" \"nodemon backend/index.js\""
},

===========> props
1]file 1
const Note = () => {
    const title = "hello";
    return (
        <>
             <Notitems key={notes._id} title={notes} />
        </>
    )
}
2] fil2 2 access
const Note = (props) => {
    return (
        <>
           <h5 className="card-title">{props.title}</h5>
        </>
    )
}


=> craet state or hooks
const [notes, setNotes] = useState("notes")
setNotes("ntoes2");

============> use location Hooks
import { useLocation } from 'react-router-dom'
let Location = useLocation();
useEffect(()=>{
    console.log(Location.pathname);
})
<Link className={`nav-link  ${Location.pathname === "/"? "active": ""} ` }aria-current="page" to="/">Home</Link>

rafc = >import React from 'react'
const react = () => {
    return (
        <div>

        </div>
    )
}
export default react

=============> react router
npm install i react-router-dom
// 1] first file
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
  import Home from './Component/Home';
<Router>
    <Navbar />
    <Routes>
        <Route exact path="/" element={<Home />} />
    </Routes>
    <Routes>
        <Route exact path="/about" element={<About />} />
    </Routes>

    {/* 404 router page  */}
    <Routes>
          <Route path="*" element={<Errorpage />} />
    </Routes>
</Router>

// 2] second file
import {Link} from "react-router-dom";
<Link className={}  to="./About.js">About</Link>

==========> use context
1]noteContext.js
import { createContext } from "react";

// createContext
const noteContecxt  = createContext();
export default noteContecxt;

2]NeteState.js
import NoteContecxt from "./noteCotext";
import { useState } from "react";
const NoteState = (props) => {
    const notesIntalize = [];
    const [notes, setNotes] = useState(notesIntalize)

    // Add a Note
    const addNote = (title, description, tag) => {

    }
    // Delete a Note
    const deleteNote = (id) => {

    }

    return (
      <NoteContecxt.Provider value={{ notes, addNote, deleteNote }}>
        {props.children}
      </NoteContecxt.Provider>
    )

  }
  export default NoteState;

  3] indexe.js
  <NoteState>
        <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
</NoteState>

4] AddNote.js
import React, { useContext, useState } from 'react'
import noteContecxt from '../Context/notes/noteCotext';
{
    const context = useContext(noteContecxt);
    const {  addNote,deleteNote,notes } = context;
}


// Jo value es not ke under he vo rahe lekin jo property age likhi ja rahi he vo add or override kar dena
const onChang = (e)=>{
    setNotes({...note,[e.target.name]: e.target.value})
}
<input type="text" className="form-control" id="description" name='description' onChange={onChang}/>
// description == value


// fix cross problem
 npm install cors
//  app.js
var cors = require('cors')
app.use(cors())

===============> use ref Hook
import React, {  useRef } from 'react'
const updatenote = () => {
    refff.current.click();
}
const refff = useRef(null)
// hear you click update Notes button that time parform launch demo modal button click
<button type="button" ref={refff} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Launch demo modal
</button>
<button type="button" className="btn btn-primary"  onClick={updatenote} >Update Note</button>


===========> disable button
<button type="submit" disabled={note.title.length < 5 || note.description.length<5} className="btn btn-primary" onClick={handleClick}>Add Note</button>


===========>event
const handleClick = (e) => {
    e.preventDefault();

}
<button type="button"  disabled={note.etitle.length < 5 || note.edescription.length<5}  className="btn btn-primary"  onClick={handleClick} >Update Note</button>

const handleSubmit = (e) =>{
e.preventDefault();
}
<form onSubmit={handleSubmit}></form>

============>userHistory
=> it is use for rediract page in react
1]install : npm install --save react-router-dom
2]import { useHistory } from "react-router-dom"
3]  let history = useHistory();

if(json.success){
    history.push("/")
}else{
alert("Invalid crendetials");
}


=================> redex app
1]install : npm i redux react-redux redux-thunk


=====> install bootstrap
npm i bootstrap

=====> rediract page 
import { Link,useNavigate } from 'react-router-dom'
const navigate = useNavigate();

const logoutHandle = ()=>{       // onclik event 
    localStorage.removeItem('jwtoken');
    navigate("/login");
}


----------------------------------- java-script -----------------------------------------
                      
====> Arrray 
<select className=' h-100 bg-primary  '>
{Array.from(Array(6), (e, i) => {
    return (
        <option key={i + 1} value={i + 1} > {i + 1}</option>
    )
})}

</select>

=====> map fucntion and filter fucntion 

=>map function is used to print array value 
Array.map((data)=>{return(data)})
=>filter function is return array ater cheack condition
foodItem.filter((item) => item.CategoryName === data.CategoryName)
          .map(filterItems=>{
            return()
          })

{ // torunary opration 
    foodcate !== []
      ? foodcate.map((data) => {
        return ( <>
          <div className='my-2 container-fluid' > <h3 key={data._id}>{data.CategoryName}</h3> <hr /> </div>

          {foodItem !== [] 
          ? foodItem.filter((item) => item.CategoryName === data.CategoryName)
          .map(filterItems=>{
            return(
              <div  key={filterItems._id} className='mx-3' >
              <Card   name={filterItems.name} description={filterItems.description} img={filterItems.img} CategoryName={filterItems.CategoryName}  options={filterItems.options[0]} />
              </div>
            )
          }) : <div>No such a data</div>}
          </>
        )
      })
      : ""
  }

==========> serch functionlity 
const [serch, setSerch] = useState('')

<input className="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search" vlaue={serch} onChange={(e)=>{setSerch(e.target.value)}} />

{foodItem !== [] 
    ? foodItem.filter((item) =>(item.name.toLowerCase().includes(serch.toLowerCase())))
    .map(filterItems=>{
      return(
        <div  key={filterItems._id} className='mx-3' >
        <Card   name={filterItems.name} description={filterItems.description} img={filterItems.img} CategoryName={filterItems.CategoryName}  options={filterItems.options[0]} />
        </div>
      )
    }) : <div>No such a data</div>}


=============> useReducer 
const { useReducer } = require("react");

const intialState = 0;

const reducer = (state,action) {
  if(action.type === "INCRE"){
    return state + 1;
  }
  if(action.type === "DECRE"){
    return state - 1;
  }
}

const [state,dispatch] = useReducer(reducer,intialState)

return(
  <button onclick({() => dispatch({type:"INCRE"})})></button>
  <button onclick({() => dispatch({type:"DECRE"})})></button>
)



// NOTE 

1] Store cart data in dataBase on user collection 
  - get logdin user id then store item
   - if user add item in cart then cheack first item is present in the cart if item is present  then update the item if not present then add new 
2] cheack out option  
   - create new coollection 
   - add data after click btn

