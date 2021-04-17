import React from 'react'
import { Navbar } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="https://www.veritaschina.org/assets/img/vChina/favicon32.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            唯理中国申请查询
            </Navbar.Brand>
            </Navbar>
        );
    }
}