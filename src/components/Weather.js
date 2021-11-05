import React, { Component } from "react";
import axios from 'axios';

export default class Weather extends Component {

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