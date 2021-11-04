import React, { Component } from "react";
import axios from 'axios';

export default class Weather extends Component {

    constructor(props) {
        super(props)
        this.state = {
            weatherForecast: []
        }
    }

    getWeatherForecast = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/weather?city=${this.props.location.display_name.split(',')[0]}
        &lat=${this.props.location.lat}&lon=${this.props.location.lon}`;
        let response = await axios.get(url);
        console.log(response.data);
        this.setState({weatherForecast: response.data});
    }

    render() {
        return (
            <div>
                <button onClick={this.getWeatherForecast}>Get weather forecast</button>
                {this.state.weatherForecast.length > 0 && this.state.weatherForecast.map((dayForecast, idx) => <li key={idx}>
                    Low temp:{dayForecast.min_temp} High temp:{dayForecast.max_temp} Description:{dayForecast.description}</li>)}
            </div>
        )
    }
}