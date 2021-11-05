import { Component } from "react";
import { Card } from 'react-bootstrap';

export default class Movies extends Component {

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.moviesShowing.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.moviesShowing.title}</Card.Title>
                        <Card.Text>
                            Lat: {this.props.moviesShowing.overview}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}