import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState( {cityName: e.target.value} )
    }

    handleClick = () => {
        this.props.getLocation(this.state.cityName)
    }

    render() {
        return (
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>
                     Search by city name.
                    </Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" value={this.state.cityName}/>
                </Form.Group>
                <Button variant='primary' onClick={this.handleClick}>Explore!</Button>
            </Form>
        )
    }
}