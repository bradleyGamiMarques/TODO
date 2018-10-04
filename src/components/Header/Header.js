import React, { Component } from 'react';
import {ReactComponent as Logo} from '../../assets/icons/baseline-menu-40px.svg';

class Header extends Component {
    state = {  }
    displayAlert = () => {
        alert('Hello there!');
    }
    render() {
        return (
            <header className={'header-flex-container'}>
                <section className={'header-content-flex-container'}>    
                    <h1 className={'headerTitle'}>To-Do-List</h1>
                    <h2>Organize your life</h2>
                </section>
                <section className={'header-hamburger-menu-flex-container'}>
                <button onClick={()=> this.displayAlert()} className={'hamburger-menu-button'}><Logo/></button>
                </section>
            </header>
        );
    }
}

export default Header;