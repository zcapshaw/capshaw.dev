import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css';

class MenuButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        const { isOpen } = this.state
        this.setState({
          isOpen: !isOpen,
        })
      }

    render() {
        return (
            <Burger 
                isOpen={ this.state.isOpen}
                onClick={ this.toggle }
            />
        );
    }
}

export default MenuButton;