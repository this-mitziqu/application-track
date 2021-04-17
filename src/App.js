import React from 'react'
import './App.css';

import InputForm from './InputForm';
import Header from './Header';
import ProgressCard from './ProgressCard';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';


function App() {
    return(
        <Container fluid className="min-vh-100 px-0 d-flex flex-column justify-content-between">
            <Header />
            <InputForm />
            <Footer />
        </Container>
    )
}


export default App;

