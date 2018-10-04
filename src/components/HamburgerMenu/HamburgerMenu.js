import React, { Component } from 'react';

class HamburgerMenu extends Component {
    state = {  }
    render() {
        return (
            <section className='hamburger-menu-closed'>
            <button className='close-button'>X</button>
            <h2>Hello!</h2>

            </section>
        );
    }
}

export default HamburgerMenu;