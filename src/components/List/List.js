import React, { Component } from 'react';
import AddListItem from '../AddListItem';
import ListItem from '../ListItem';
import RemoveAllListItems from '../RemoveAllListItems';

class List extends Component {
    render() {
        const { addListItem, removeAllListItems, removeListItem, todoListArray } = this.props;
        return (
            <section className='flex-container'>
                <section className='list-header-flex-container'>
                    <section className='list-header-content'>
                        <p>Your Tasks</p>
                        <RemoveAllListItems removeAllListItems={removeAllListItems} />
                    </section>
                </section>
                <section className='list-container'>
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
                </section>
                <section className='list-footer-flex-container'>
                    <AddListItem addListItem={addListItem} />
                </section>
            </section>
        );
    }
}

export default List;