import React from 'react'
import './DeleteButton.css'

function Delete ({id, onDelete}) {
    return (
        <div>
            <button onClick={() => onDelete(id)} className='deletebutton'> Delete </button>
        </div>
    )
}

export default Delete