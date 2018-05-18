import React, {Component} from 'react';
import ModuleItem from './ModuleItem';
import '../App.css';

class Module extends Component{

  showPopUp = () => {
    this.props.showPop();
  }

  render(){
    let moduleItems;
    if(this.props.modules){
      moduleItems = this.props.modules.map(module => {
        return(
          <ModuleItem showPop={this.showPopUp} key={module.id} modules={module} />
        );
      });
    }
    return (
      <div className="Module">
        {moduleItems}
      </div>
    );
  }
}

export default Module;
