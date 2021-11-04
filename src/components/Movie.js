import { Component } from "react";
import axios from 'axios';

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesShowing: []
        };
    }

    getMoviesShowing = async () => {
        const city = location.props.display_name.split(',')[0];
        const url = `${process.env.REACT_APP_SERVER_URL}/movie?city=${city}`;
        try {
            let response = await axios.get(url);
            this.setState({moviesShowing: response.data});
        } catch (e) {
            this.setState
        }

    }

    render() {
        return (

        )
    }
}