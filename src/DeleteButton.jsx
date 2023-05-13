import React from 'react'
import './DeleteButton.css'

function Delete ({id, onDelete}) {
    return (
        <div>
            <button onClick={() => onDelete(id)} className='deletebutton'> Delete </button>
            <box-icon type='solid' name='trash-alt' className='box-icon'></box-icon>
        </div>
    )
}

export default Delete