
// import { useState } from "react"
// function App() {
  



// return (
//   <Fragment>
//   <div>
//      <HeaderWithButton></HeaderWithButton>
//     <Header title="NOBO69"></Header>
    
//   </div>
//   </Fragment>
// ) 
// }
// function HeaderWithButton() {
//   const [title, setTitle] = useState("nabadeep");

//   function updateTitle() {
//      setTitle("my name is " + Math.random());
//   }
//   return <div>
// <button onClick={updateTitle}>update the title</button>
// <Header title={title}></Header>
//   </div>
// } 

// function Header({title}) {
//   return <div>
//     {title}
//   </div>
  
// }


import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Need to hit the gym from 7-9PM"
  }, {
    title: "Go to Clas",
    description: "Need to go to the class from 4-7 PM"
  }, {
    title: "Eat foor",
    description: "Need to eat food from 2-4 PM"
  }])
  return (
    <div>
      {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App