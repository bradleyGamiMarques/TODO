import React, { Component } from 'react';
import ListItem from '../ListItem';

class List extends Component {
    render() {
        const { removeListItem, todoListArray } = this.props;
        return (
            <ul>
                {todoListArray.map((item, index) => {
                    return (
                        <li key={item + index}>
                            <ListItem
                                count={index + 1}
                                item={item}
                                removeListItem={removeListItem} />
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default List;