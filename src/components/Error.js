import { Component } from "react";
import Alert from 'react-bootstrap/Alert';

export default class Error extends Component {
    render() {
        return (
            <Alert variant='danger'>An error has occured</Alert>
        )
    }
}