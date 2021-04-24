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
        };
    }

    handleResult = (response) => {
        this.setState({result: response.data, showTable: true});
    }

    reset = () => {
        this.setState({result: {}, showTable: false, CardIndex: false});
    }

    showCard = (i) => {
        console.log(i)
        this.setState({showTable: false, CardIndex: i})
    }

    render() {
        const { result, showTable, CardIndex } = this.state;
        return(
            <Container fluid className="min-vh-100 px-0 d-flex flex-column justify-content-between">
                <Header />
                <Container>
                    <InputForm
                    handleResult = {this.handleResult}
                    reset = {this.reset}
                    />
                    {
                        showTable?(<ResultTable 
                            result={result} 
                            showCard = {this.showCard}
                            />):null
                    }
                    {
                        CardIndex?(<ProgressCard
                            app = {result[CardIndex - 1]}
                            onClick = {()=>this.setState({showTable: true, CardIndex: false})} 
                        />):null
                    }
                </Container>
                <Footer />
            </Container>
        )
    }
}


export default App;

