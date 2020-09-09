import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';

export default ({nota, id, deleteTarea}) => (
    <div className="note">
       <p className="pa">#{id}    {nota}</p> 
       <div><button className="fas fa-trash-alt trash" onClick={() => deleteTarea(id)}/></div>
    </div>)

