import React, { Fragment } from 'react'
import './App.css';

import Header from './Header';
import Footer from './Footer';
import InputForm from './InputForm';
import ResultTable from './ResultTable';
import ProgressCard from './ProgressCard';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          result: {},
          showTable: false,
          CardIndex: false,
          loading: false
        };
    }

    handleResult = (response) => {
        this.setState({result: response.data[0], showTable: true});
    }

    reset = () => {
        this.setState({result: {}, showTable: false, CardIndex: false});
    }

    getCardIndex = (i) => {
        console.log(i)
        this.setState({showTable: false, CardIndex: i})
    }

    renderCard(result, CardIndex) {
            return(
                CardIndex?(<ProgressCard
                    result = {result}
                    index = {CardIndex - 1}
                    onClick = {()=>this.setState({showTable: true, CardIndex: false})} 
                />):null
            )
    }

    render() {
        const { result, showTable, CardIndex } = this.state;
        return(
            <Container fluid className="min-vh-100 px-0 d-flex flex-column justify-content-between">
                <Header />
                <InputForm
                handleResult = {this.handleResult}
                reset = {this.reset}
                />
                    {
                        showTable?(<ResultTable 
                            result={result} 
                            getCardIndex = {this.getCardIndex}
                            />):null
                    }
                    {this.renderCard(result, CardIndex)}
                <Footer />
            </Container>
        )
    }
}


export default App;

