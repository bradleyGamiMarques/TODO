import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        const {count, item, removeListItem} = this.props;
        return (
            <section className='list-item-card'>
                <p>{count}. {item}</p>
                <button className="button--link" onClick={() => removeListItem(item)}>X</button>
            </section>
        )
    }
}
export default ListItem;
