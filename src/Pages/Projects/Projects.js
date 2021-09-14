import React from 'react';
import Stylesheet from './Projects.module.css';
import Classnames from 'classnames';
import * as Insight from '../../insight/index';
import Project from '../../components/Project/Project';
import Title from '../../elements/Title/Title';
import Spinner from '../../components/Spinner/Standard/Standard';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectUpdated: false,
            projectsReady: false
        }
        // collection of project components
        this.projectCollection = null;
        this.onProjectUpdateTrigger = this.onProjectUpdateTrigger.bind(this);
        this.getAllProjects = this.getAllProjects.bind(this);
        this.getRenderedProjects = this.getRenderedProjects.bind(this);
    }

    onProjectUpdateTrigger = function(changes) {
        let projectsArray = [];
        // convert projects details to json string
        changes.forEach((project) => { projectsArray.push(project.data()) })
        // clear current projects collection
        sessionStorage.removeItem('projectCollection');
        // push updated collection
        sessionStorage.setItem('projectCollection', JSON.stringify(projectsArray));
        // update project updated state
        this.setState({projectUpdated: true});
    }
    getRenderedProjects = function() {
        let projects = [];
        let projectCollection = 
            JSON.parse(sessionStorage.getItem('projectCollection'));
        // check if projects have already been fetched
        if (projectCollection !== null) {
            // re-render components in case app theme was changed
            projectCollection.forEach((details) => {
                let projectDetails = details;
                projects.push(
                    <Project project={projectDetails} theme={this.props.theme}
                        font={this.props.font}/>
                )
            })   
        }

        return projects;
    }
    getAllProjects = async function() {
        let projectCollection = sessionStorage.getItem('projectCollection');
        // check if projects have already been fetched
        if (projectCollection !== null)
            return Promise.resolve(); // projects already fetched

        // fetch projects
        await Insight.Articles
            .get('projects',null,this.onProjectUpdateTrigger)
            .then((collection) => {
                let projectsArray = [];
                // update cache
                this.projectCollection = collection;
                // convert projects details to json string
                collection.forEach((project) => { projectsArray.push(project.data()) })
                projectsArray = JSON.stringify(projectsArray);
                // store projects collection in session storage
                sessionStorage.setItem('projectCollection',projectsArray);
                // inform component that porjects are ready to render
                this.setState({projectsReady: true})
            })
       
    }

    render() {
        let ContainerStyle = Classnames(
            Stylesheet.Container, {
                [Stylesheet[this.props.theme]]: true
            }
        )
        let titleStyle = {
            font: 'medium'
        }

        if (this.state.projectsReady) {
            // fetch rendered jsx
            let projects = this.getRenderedProjects();
            return (
                <div className={ContainerStyle}>
                    <div className={Stylesheet.Header}>
                        <Title theme={this.props.theme}
                            font={this.props.font} style={titleStyle}>
                            recent projects
                        </Title>
                    </div>
                    <div className={Stylesheet.Collection}>
                        {projects.map((element, index) => ( 
                            <div key={index}>
                                {element}
                            </div>
                        ))}
                    </div>
                </div>
            )
        } else {
            // fetch projects collection
            this.getAllProjects().then(() => { this.setState({projectsReady: true}) });
            return (
                <div className={ContainerStyle}>
                    <div className={Stylesheet.Header}>
                        <Title theme={this.props.theme}
                            font={this.props.font} style={titleStyle}>
                            recent projects
                        </Title>
                    </div>
                    <div className={Stylesheet.Collection}>
                        <div className={Stylesheet.Loading}>
                            <Spinner theme={this.props.theme}/>
                        </div>
                    </div>
                </div>
            )
        }
        
    }
    
}

export default Projects;