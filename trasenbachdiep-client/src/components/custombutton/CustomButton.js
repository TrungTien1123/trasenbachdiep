import { Component } from 'react';

import './CustomButton.css';

class CustomButton extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { 
            width, 
            type, 
            uppercase, 
            large, 
            color, 
            //children,
            ...otherProps
        } = this.props;

        //const { title } = this.props;

        return (
            <button
                className={large ? 'custom_btn btn-lg' : 'custom_btn'}
                type={type}
                style={{
                    width: width ? width : 'inherit',
                    textTransform: uppercase ? 'uppercase' : 'none',
                    color: color,
                    cursor: 'pointer'
                }}
                {...otherProps}
            >
                {/* { title } */}
                {this.props.children}
            </button>
        )
    }
}

export default CustomButton;