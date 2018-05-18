import React, { Component } from 'react';

class ProjectsItem extends Component {

  deleteProject = (id) => {
    //console.log(id);
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Projects">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} <button onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</button>
      </li>
    );
  }
}

export default ProjectsItem;
