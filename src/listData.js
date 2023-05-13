import React from 'react'
import ItemData from './itemData'
import Header from './header'
import './listData.css'



function ListData({dataList, onDelete}) {

    return (
        <div className='container' >
            {
                dataList.map((data) => (
                    <ItemData 
                        id={data.id} 
                        title={data.title}
                        description={data.description} 
                        img={data.img}
                        onDelete={onDelete}
                        {...data}
                    />
                ))
            }
        </div>
    )
}

export default ListData