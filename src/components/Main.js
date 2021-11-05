import { Component } from "react";
import axios from "axios";
import Search from './Search.js';
import DisplayCard from './DisplayCard.js';
import Weather from './Weather.js';
import Error from './Error.js';
import Movies from './Movie.js';


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: '',
            error: false,
            map: '',
            cityName: '',
            weatherForecast: [],
            moviesShowing: []
        }
    }

    getMoviesShowing = async (location) => {
        const city = location.props.display_name.split(',')[0];
        const url = `${process.env.REACT_APP_SERVER_URL}/movie?city=${city}`;
        try {
            let response = await axios.get(url);
            this.setState({moviesShowing: response.data});
        } catch (e) {
            this.setState({error: true})
        }

    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState( {cityName: e.target.value} )
    }

    handleClick = async (event) => {
        event.preventDefault();
        this.setState({error: ''});
        try {
            await this.getLocation();
            this.getMapURL();
            this.getWeatherForecast();
            this.getMoviesShowing();
        } catch (e) {
            this.setState({error: true})
        }
        this.props.getLocation(this.state.cityName)
    }

    getWeatherForecast = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${this.props.location.lat}&lon=${this.props.location.lon}`;
        try {
            let response = await axios.get(url);
            this.setState({weatherForecast: response.data});
        } catch (e) {
            this.setState({weatherForecast: []});
            this.props.errorHandler()
        }

    }

    getLocation = async (city) => {
        const cityurl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${city}&format=json`;

        try {
            let response = await axios.get(cityurl);
            this.setState({location: response.data[0]}, this.getMapURL, {error: false});
            console.log(response.data[0]);
        } catch (error) {
            console.log(error);
            this.setState( {error: true} );
        }

    }

    getMapURL = () => {
        let url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=
        ${this.state.location.lat},${this.state.location.lon}&zoom=12`;
        this.setState( {location: {...this.state.location, map: url}} );
    }

    render() {
        return (
            <div>
                <Search getLocation={this.getLocation} handleClick={this.handleClick} handleChange={this.handleChange} />
                <Error error={this.state.error} />
                {this.state.location.map && <DisplayCard location={this.state.location}/>}
                <Weather weatherForecast={this.state.weatherForecast} />
                <Movies moviesShowing={this.state.moviesShowing} />
            </div>
        )
    }
}