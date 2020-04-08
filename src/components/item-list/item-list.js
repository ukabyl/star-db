import React from 'react'

import './item-list.css';

const ItemList = ({ data, onItemSelected, children: renderItem }) => {

    const list = data.map((item) => {
        return (
            <li 
                key={item.id} 
                className="list-group-item"
                onClick={() => onItemSelected(item.id)}>
                {renderItem(item)}
            </li>
        );
    })
    
    return (
        <ul className="list-group list-items">
            {list}
        </ul>
    );
}

export default ItemList;
