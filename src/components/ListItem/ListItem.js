import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        const {count, item, removeListItem} = this.props;
        return (
            <div>
                <p>{count}. {item}</p>
                <button className="button--link" onClick={() => removeListItem(item)}>X</button>
            </div>
        )
    }
}
export default ListItem;
