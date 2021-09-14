import React from 'react';
import Stylesheet from './PageNotFound.module.css';
import Classnames from 'classnames';
import {Link} from 'react-router-dom';
import Title from '../../elements/Title/Title';
import Discription from '../../elements/Discription/Discription';
import Button from '../../elements/Button/Button';

function PageNotFound(props) {
    
    let TitleStyle = {
        font: "large"
    }
    let ButtonStyle = {
        font: 'medium',
        theme: 'black'
    }
    let ContainerStyle = Classnames(
        Stylesheet.Container, {
            [Stylesheet[props.theme]]: true
        }
    )
    return (
        <div className={ContainerStyle}>
             <div className={Stylesheet.NotFound}>
                <Title theme={props.theme}
                    font={props.font} style={TitleStyle}>
                    404 Page Not Found
                </Title>
                <Discription theme={props.theme}>
                    the page you requested for does not exist or has been moved.
                </Discription>
                <Button font={props.font} style={ButtonStyle}>
                    {<Link to='/'>Intec Home Page</Link>} 
                </Button>
            </div>
        </div>
    )
}

export default PageNotFound;