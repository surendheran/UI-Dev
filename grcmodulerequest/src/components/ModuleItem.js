import React, {Component} from 'react';

class ModuleItem extends Component{

  requestAccess(access) {
    if(!access){
      this.props.showPop();
    }
  }

  render() {
    let access = this.props.modules.access ? "ModuleItem" : "ModuleItem1";
    return(
      <div className={access} onClick={this.requestAccess.bind(this, this.props.modules.access)}>
        <span className="Module-Header">{this.props.modules.name}</span><br />
        <span className="Module-Desc">{this.props.modules.desc}</span>
      </div>
    );
  }
}

export default ModuleItem;
