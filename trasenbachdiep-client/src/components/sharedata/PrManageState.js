import { Component } from "react";
import TemperatureInput from "./TemperatureInput";

class PrManageState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: '',
            currentInputChanged: 'tempCel'
        }
    }

    _inputChange = (e) => {
        console.log('temp received from child: ' + e.target.value);
        console.log('name input change: ' + e.target.name);
        this.setState({
            temp: e.target.value,
            currentInputChanged: e.target.name
        })
    }

    _toCelsius = fah => {
        return (fah - 32) * 5 / 9;
    }

    _toFahrenheit = cel => {
        return (cel * 9 / 5) + 32;
    }

    render() {
        let tempFah = this.state.currentInputChanged === 'tempFah' ? this.state.temp : this._toFahrenheit(this.state.temp);
        let tempCel = this.state.currentInputChanged === 'tempCel' ? this.state.temp : this._toCelsius(this.state.temp);
        return(
            <div>
                <TemperatureInput
                    name='tempCel'
                    temperatureType='Cel'
                    inputChange={this._inputChange}
                    value={tempCel}
                />
                <TemperatureInput
                    name='tempFah'
                    temperatureType='Fah'
                    inputChange={this._inputChange}
                    value={tempFah}
                />
            </div>
        )
    }
}

export default PrManageState;