import React from 'react';
import ReactDOM from 'react-dom';

class CheckAndUncheck extends React.Component {

  constructor(props) {
    super(props);
    this.checkIt = this.checkIt.bind(this);
    this.unCheckIt = this.unCheckIt.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      checked:false
    };
  }

  checkIt() {
    this.setState({
      checked:true
    });
  }

  unCheckIt() {
    this.setState({
      checked:false
    });
  }

  handleChange(evt) {
     if(this.state.checked !== evt.target.checked) {
        this.setState({
          checked:evt.target.checked
        });
     }
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.checkIt}>Check</button> &nbsp;&nbsp;&nbsp; <button onClick={this.unCheckIt}>Uncheck</button>
        </div>
        <br/>
        <div>
          Checkbox :: <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
          Checkbox :: <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
        </div>
        <br/>
        <div>
          Radio button :: <input type="radio" checked={this.state.checked} onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

CheckAndUncheck.propTypes = {
}

CheckAndUncheck.defaultProps = {
}

export default CheckAndUncheck;
ReactDOM.render(<CheckAndUncheck/>,document.getElementById('root'));
