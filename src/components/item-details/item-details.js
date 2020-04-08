import React, { Component } from 'react'

import './item-details.css';

const Record = ({ item, label, field }) => {
    return (
        <li className="list-group-item">
            <h5>{ label }</h5> { item[field] }
        </li>
    );
}

export {
    Record
}

export default class ItemDetails extends Component{


    state = {
        item: null,
        image: null,
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if ( this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl ) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;

        if ( !itemId ) {
            return
        }
        
        getData(itemId)
            .then((item) => this.setState({ 
                item,
                image: getImageUrl(item) 
            }))
    }
    
    render() {
        const { item, image } = this.state;
        if (!item) {
            return 'Select an item!'
        }
        const { name } = item;

        return (
            <div className="details__jumbotron jumbotron">
                <div className="details__img">
                    <img alt={item.name} src={image} />
                </div>
                <div className="details__info">
                    <h2>{name}</h2>
                    <ul className="list-group">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item })
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
