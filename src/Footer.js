import React from 'react'
import ReactDOM from 'react-dom'
import ModalFooter from 'react-bootstrap/ModalFooter'
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';


class Footer extends React.Component {
    render() {
        return(
            <Container className="text-center">
            <p> Copyright © 2015-2021 <b> Veritas China </b></p>
            </Container>
        );
    }
}

export default Footer;