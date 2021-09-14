import React from 'react';
import Stylesheet from './Project.module.css';
import Classnames from 'classnames';
import Title from '../../elements/Title/Title';
import Discription from '../../elements/Discription/Discription';
import { ico_check_circle, ico_clock } from '../../icon';
import Image from '../../elements/Image/Image';

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logoLoaded: false,
            logo: null
        }
    }

    render() {
        
        let ContainerStyle = Classnames(
            Stylesheet.Container, {
                [Stylesheet[this.props.theme]]: true
            }
        )
        let projectTitleStyle = {
            font: "small"
        }
        let projectDiscriptionStyle = {
            font: 'small'
        }
        
        return (
            <div className={ContainerStyle}>
                <div className={Stylesheet.Card}>
                    <div className={Stylesheet['Image-cerasol']}>
                        <div className={Stylesheet.List}>
                            <Image 
                                alt={this.props.project.name}
                                src={this.props.project.logo}
                                url='relative'/>
                        </div>
                    </div>
                    <div className={Stylesheet.Details}>
                        <Title theme={this.props.theme} font={this.props.font}
                            style={projectTitleStyle}>
                            {this.props.project.name}
                        </Title>
                        <Discription theme={this.props.theme} 
                            font={this.props.font} style={projectDiscriptionStyle}>
                            {this.props.project.discription}
                        </Discription>
                        <div className={Stylesheet.Properties}>
                            <h5 className={Stylesheet.Type}>{this.props.project.type}</h5>
                            <h5 className={Stylesheet.State}>
                                {this.props.project.stage.state === 'published'
                                    ? ico_check_circle : ico_clock} &nbsp; 
                                {this.props.project.stage.state}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Project;