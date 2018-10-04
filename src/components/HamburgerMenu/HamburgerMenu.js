import React, { Component } from 'react';

class HamburgerMenu extends Component {
    state = {  }
    render() {
        return (
            <section className={this.props.isHamburgerMenuOpen ? 'hamburger-menu-open' : 'hamburger-menu-closed'}>
            <button onClick={this.props.toggleMenu} className='close-button'>X</button>
            <h2>Hello!</h2>

            </section>
        );
    }
}

export default HamburgerMenu;