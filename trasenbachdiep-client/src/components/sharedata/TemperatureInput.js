import { Component }  from 'react';

class TemperatureInput extends Component {

    constructor(props)  {
        super(props);
        this.state = {

        }
    }

    _onChange = e => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);

        //this.props.inputChange(e.target.value)
     
        this.props.inputChange(e);

        // let objTemp = {
        //     name: e.target.name,
        //     value: e.target.value
        // }
        // this.props.inputChange(objTemp)
    }


    render () {
        console.log(this.props);

        return(
            <fieldset>
                <legend>Enter temperature in {this.props.temperatureType}</legend>
                <input
                    style={{height: '34px'}}
                    name={this.props.name}
                    onChange={this._onChange}
                    value={this.props.value}
                />
            </fieldset>
        )
    }
}

export default TemperatureInput;