
import './itemData.css'
import DeleteButton from './DeleteButton'


function ItemData({id, title, description, img, onDelete}) {
    return(
        <div className="itemData">
            
                <h2>{title}</h2>
                <p>{description}</p>
                <img src={require('./image/'+ img)}/>
                <DeleteButton id={id} onDelete={onDelete} />
            
        </div>
    )
}

export default ItemData