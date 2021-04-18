import React from 'react'
import './ProgressCard.css';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: []
        };
      }

    updateBar() {
    var myProgress = [];
    const bound = this.props.result.status;
    for (var i = 0; i < bound; i++){
        myProgress[i] = 'active';
    }
    this.setState({progress: myProgress});
}

    componentDidMount() {
        this.updateBar();
    }

    componentDidUpdate(prevProps) {
        if(this.props.result !== prevProps.result) {
            this.updateBar();
        }
    }
    
    BarNode() {
        var steps;
        if (this.props.result.steps == 'null') {
            steps = Array(4);
        }
        else {
            steps = JSON.parse(this.props.result.steps);
        }
        return [...Array(steps.length)].map((e, i) => (
            <li key={i} className={this.state.progress[i] + " col step0"}>
                <h6 className="pt-5 font-weight-bold">{steps[i]}</h6>
            </li>
            ));
    }


    render() {
    return(
        <div className="d-flex justify-content-center">
            <div className="col-12">
                <ul id="progressbar" className="text-center d-flex flex-row justify-content-between">{this.BarNode()}
                </ul>
            </div>
        </div>
    );
    }
}

export default ProgressBar;