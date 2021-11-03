import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class DisplayCard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={this.props.location.map} />
                    <Card.Body>
                        <Card.Title>{this.props.location.display_name}</Card.Title>
                        <Card.Text>
                            Lat: {this.props.location.lat}
                        </Card.Text>
                        <Card.Text>
                            Lon: {this.props.location.lon}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}