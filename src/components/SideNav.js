import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';


class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }

    render() {
        return (
            <Menu   right 
                    width={ '20%' }
                    isOpen={this.state.isOpen}
                    styles={ styles }
                    burgerButtonClassName={ "outline-none" }
                    burgerBarClassName={ "outline-none" }
                    itemListClassName={ "flex-col" }
            >
                    <a id="home" className="menu-item focus:outline-none" href="#Home">Home</a>
                    <a id="about" className="menu-item focus:outline-none" href="#AboutMe">About</a>
                    <a id="projects" className="menu-item focus:outline-none" href="#Projects">Projects</a>
                    <a id="contact" className="menu-item focus:outline-none" href="#Contact">Contact</a>                             
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
      top: '36px'
    },
    //burger icon color
    bmBurgerBars: {
      background: '#a0aec0',
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#1a202c',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '1em',
    },
    bmItem: {
      display: 'block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    },
  }