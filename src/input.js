import React, {useState} from 'react'
import Note from './tareas'

const enviarTarea = (e, tarea, setTarea, input, setInput)=>{
    e.preventDefault()
    const id = (tarea.length) ? tarea[tarea.length - 1].id + 1 : 1
    
    setTarea([...tarea, {id: id, nota: input}])
    setInput('')
}

const deleteTarea=(id, tarea, setTarea)=>{
    setTarea(tarea.filter(note => note.id !== id))
}

export default ()=>{
    const [tarea, setTarea] = useState([])
    const [input, setInput] = useState('')
    return(
    <>
        <h1 className="unique-title">My To Do List</h1>
        <div className="contenedor">
            <div className="formcontrol">
                <form onSubmit={(e)=> enviarTarea(e, tarea, setTarea, input, setInput)}>
                    <input placeholder="Añadir una tarea" className="note" onChange={(e) => setInput(e.target.value)} value={input}/>
                    <button className="container">+</button>
                    
                </form>
                {tarea.map(note =>(
                    <Note nota={note.nota} id={note.id} deleteTarea={(id)=> deleteTarea(id, tarea, setTarea)} />
                ))}
            </div>
        </div>
    </>
    )

}