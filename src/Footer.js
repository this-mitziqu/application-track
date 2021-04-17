import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';


export default class Footer extends React.Component {
    render() {
        return(
            <Container className="text-center">
            <p> Copyright © 2015-2021 <b> Veritas China </b></p>
            </Container>
        );
    }
}