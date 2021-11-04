import { Component } from "react";
import axios from "axios";
import Search from './Search.js';
import DisplayCard from './DisplayCard.js';
import Alert from 'react-bootstrap/Alert';
import Weather from './Weather.js';
import Error from './Error.js';
import Movies from './Movie.js';


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: '',
            error: false,
            map: ''
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
                <Search getLocation={this.getLocation} />
                <Error error={this.state.error} />
                {this.state.location.map && <DisplayCard location={this.state.location}/>}
                {this.state.location.map && <Weather location={this.state.location} />} 
                <Movies location={this.state.location} />
            </div>
        )
    }
}