import './App.css';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewToDo, completeToDo, removeToDo } from './actions/actions';

function App() {
  
  const state = useSelector( state => state.toDos );
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState('')
  const [toDos, setNewToDos] = useState([])
  console.log(state)
  const handleClick = () => {
    let value = {
      tarea: newItem,
      check: false,
      id: Date.now()
    }
    dispatch( addNewToDo(value) )
    setNewToDos(toDosanterior => [...toDosanterior, value])
  }
  //console.log(toDos)
  
  const handleCheck = (id) => {
    /* let todoNew = toDos.find( x => x.id === id)
    console.log(todoNew)
    let filtrado = toDos.filter( x => x.id !== id)
    console.log(filtrado) */
    //todoNew.check = !todoNew.check //para hacer un switch entre true o false
    //setNewToDos([...filtrado, todoNew])
    dispatch( completeToDo(id) )
    //       [estado anterior + todo new]
  }

  const handleDelete = (id) => {
    //setNewToDos(toDosanterior => toDosanterior.filter(c => c.id !== id))
    dispatch( removeToDo(id) )
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input type="text" value={newItem} placeholder="Tarea..." onChange={(a) => setNewItem(a.target.value)} />
      <button type="submit" onClick={handleClick}>Agregar</button>

      <ul>
        {
          state.map(c => (
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
