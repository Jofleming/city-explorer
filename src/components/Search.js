import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Search extends Component {

    render() {
        return (
            <Form>
                <Form.Label htmlFor='inlineFormInputName' visuallyHidden>
                    Search by city name.
                </Form.Label>
                <Form.Control onChange={this.props.handleChange} placeholder='Example: Portland' />
                <Button onClick={this.props.handleClick}>Explore!</Button>
            </Form>
        )
    }
}