import React from 'react'
import './App.css';

import InputForm from './InputForm'
import ProgressCard from './ProgressCard';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';


function App() {
    return(
    <Container fluid className="vh-100 d-flex flex-column justify-content-around">
        <InputForm />
        <Footer />
    </Container>
    )
}


export default App;

