import { Component } from "react";
import axios from "axios";
import Search from './Search.js';


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityValue: '',
            location: '',
            error: false,
            map: ''
        }
    }

    handleClick = async () => {
        const cityurl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.cityValue}&format=json`;

        try {
            let response = await axios.get(cityurl);
            this.setState( {location: response.data[0]} );
        } catch (error) {
            console.log(error);
            this.setState( {error: true} );
        }

    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState( {cityValue: e.target.value} )
    }

    render() {
        return (
            <div>
                <Search handleClick={this.handleClick} handleChange={this.handleChange}/>
                {this.state.location && <h1>{this.state.location.display_name}</h1>}
            </div>
        )
    }
}