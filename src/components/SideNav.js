import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';


class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <Menu   right 
                    width={ '20%' }
                    isOpen={this.state.isOpen}
                    styles={ styles }
                    burgerButtonClassName={ "my-class" }
            >
                    <a id="home" className="menu-item focus:outline-none no-underline text-white hover:text-blue-200" href="#Home">Home</a>
                    <a id="about" className="menu-item focus:outline-none no-underline text-white hover:text-blue-200" href="#AboutMe">About</a>
                    <a id="projects" className="menu-item focus:outline-none no-underline text-white hover:text-blue-200" href="#Projects">Projects</a>
                    <a id="contact" className="menu-item focus:outline-none no-underline text-white hover:text-blue-200" href="#Contact">Contact</a>                             
            </Menu>
        );
    }
}

export default SideNav;

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '20px',
      height: '20px',
      right: '36px',
      top: '36px',
      pointerEvents: 'auto'
    },
    //burger icon color
    bmBurgerBars: {
      background: '#a0aec0',
      height: '8%'
    },
    bmBurgerBarsHover: {
      background: '#a0aec0'
    },
    bmCrossButton: {
      height: '30px',
      width: '30px'
    },
    bmCross: {
      background: '#bdc3c7',
      width: '1px',
      height: '20px'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width: '16rem'
    },
    bmMenu: {
      background: '#1a202c',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '1em',
    },
    bmItem: {
      display: 'block',
      padding: '0.75rem 0 0 0',
      fontSize: '1.5rem',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    },
  }