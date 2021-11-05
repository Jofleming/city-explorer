import { Component } from 'react';
import Movie from './Movie.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default class Movies extends Component {
    render() {
        return (
            <Container fluid id='movieShowcase'>
                <Row>
                    {this.props.moviesShowing.map(movie => <Movie moviesShowing={movie} />)}
                </Row>
            </Container>
        )
    }
}