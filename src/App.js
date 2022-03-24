import './App.css';
import { useState } from 'react'

function App() {

  const [newItem, setNewItem] = useState('')
  const [toDos, setNewToDos] = useState([])

  const handleClick = () => {
    let value = {
      tarea: newItem,
      check: false,
      id: Date.now()
    }
    setNewToDos(toDosanterior => [...toDosanterior, value])
  }
  //console.log(toDos)
  
  const handleCheck = (id) => {
    let todoNew = toDos.find( x => x.id === id)
    let filtrado = toDos.filter( x => x.id !== id)
    todoNew.check = !todoNew.check //para hacer un switch entre true o false
    setNewToDos([...filtrado, todoNew])
    //       [estado anterior + todo new]
  }

  const handleDelete = (id) => {
    setNewToDos(toDosanterior => toDosanterior.filter(c => c.id !== id))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input type="text" value={newItem} placeholder="Tarea..." onChange={(a) => setNewItem(a.target.value)} />
      <button type="submit" onClick={handleClick}>Agregar</button>

      <ul>
        {
          toDos.map(c => (
            <div key={c.id}>
              <li>{c.tarea}</li>
              <button onClick={() => handleCheck(c.id)}>{ c.check ? 'Hecho' : 'Pendiente' }</button>
              <button onClick={() => handleDelete(c.id)}>X</button>
            </div>
          ))
        }
      </ul>


    </div>
  );
}

export default App;
