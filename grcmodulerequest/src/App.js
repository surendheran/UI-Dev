import React, { Component } from 'react';
import uuid from 'uuid';
import Module from './components/Module'
import RequestForm from './components/RequestForm'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      modules: [],
      showRequestForm: false
    }
  }

  componentWillMount(){
    this.setState({modules:[
      {
        id: uuid.v4(),
        name: 'Exam',
        desc: 'Exam request',
        access: true
      },
      {
        id: uuid.v4(),
        name: 'Issue',
        desc: 'Issue tracking',
        access: true
      },
      {
        id: uuid.v4(),
        name: 'Fraud',
        desc: 'Suspecious transaction',
        access: false
      }
    ]});
  }

  closePopUp = () => {
    this.setState({
      showRequestForm: false
    });
  }

  showPopUp = () => {
    this.setState({
      showRequestForm: true
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GRC Modules</h1>
        </header>
        <Module showPop={this.showPopUp} modules={this.state.modules}/>
        {this.state.showRequestForm && <RequestForm closePopUp={this.closePopUp} module={this.state.modules.name}/>}
      </div>
    );
  }
}

export default App;
