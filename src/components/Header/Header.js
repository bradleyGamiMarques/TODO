import React, { Component } from 'react';
import {ReactComponent as MenuButton} from '../../assets/icons/baseline-menu-40px.svg';
import HamburgerMenu from '../HamburgerMenu';

class Header extends Component {
    state = {
        isHamburgerMenuOpen:false
      }
    toggleMenu = () => {
        this.setState({
            isHamburgerMenuOpen: !this.state.isHamburgerMenuOpen
        });
    }
    render() {
        return (
            <header className='header-flex-container'>
                <section className='header-content-flex-container'>    
                    <h1 className='headerTitle'>To-Do-List</h1>
                    <h2>Organize your life</h2>
                </section>
                <section className='header-hamburger-menu-flex-container'>
                <button onClick={()=> this.toggleMenu()} className='hamburger-menu-button'><MenuButton/></button>
                </section>
                <HamburgerMenu/>
            </header>
        );
    }
}

export default Header;