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
    const steps = this.props.info.steps;
    for (var i = 0; i < steps.length; i++){
        if(steps[i].stepStatus === "true") {
            myProgress[i] = 'active';
        }
    }
    this.setState({progress: myProgress});
}

    componentDidMount() {
        this.updateBar();
    }

    componentDidUpdate(prevProps) {
        if(this.props.info !== prevProps.info) {
            this.updateBar();
        }
    }
    
    BarNode() {
        var steps = this.props.info.steps;
        // if (this.props.info.steps === 'null') {
        //     steps = Array(4);
        // }
        // else {
        //     steps = JSON.parse(this.props.info.steps);
        // }
        return [...Array(steps.length)].map((e, i) => (
            <li key={i} className={this.state.progress[i] + " col step0"}>
                <h6 className="pt-5 font-weight-bold">{steps[i].stepName}</h6>
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