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
            <section className='menu-overlay' hidden={!this.state.isHamburgerMenuOpen} onClick={() => this.toggleMenu()}/>
                <section className='header-content-flex-container'>    
                    <h1>To-Do-List</h1>
                    <h3>Organize your life</h3>
                </section>
                <section className='header-hamburger-menu-flex-container'>
                <button  className='hamburger-menu-button' onClick={()=> this.toggleMenu()}><MenuButton/></button>
                </section>
                <HamburgerMenu toggleMenu={this.toggleMenu} isHamburgerMenuOpen={this.state.isHamburgerMenuOpen}/>
            </header>
        );
    }
}

export default Header;