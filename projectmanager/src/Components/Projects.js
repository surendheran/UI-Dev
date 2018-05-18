import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectsItem from './ProjectsItem';

class Projects extends Component {

  constructor(){
    super();
    this.state = {
      style:{
        color: 'blue'
      }
    }
  }

  deleteProject = (id) => this.props.onDelete(id)

  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        //console.log(this.props.project);
        return (
          <ProjectsItem onDelete={this.deleteProject} key={project.id} project={project} />
        );
      });
    }
    return (
      <div className="Projects">
        <h3><span style={this.state.style}>Latest Projects</span></h3>
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
}
export default Projects;
