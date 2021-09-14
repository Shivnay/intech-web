import React from 'react';
import Stylesheet from './Publications.module.css';
import Classnames from 'classnames';
// import * as Insight from '../../insight/index';
import {Link} from 'react-router-dom';
import Title from '../../elements/Title/Title';
import Discription from '../../elements/Discription/Discription';
import Button from '../../elements/Button/Button';

function Publication(props) {
    
    let ContainerStyle = Classnames(
        Stylesheet.Container, {
            [Stylesheet[props.theme]]: true
        }
    )
    let TitleStyle = {
        font: "medium"
    }
    let ButtonStyle = {
        font: 'medium',
        theme: 'blue'
    }
    return (
        <div className={ContainerStyle}>
            <div className={Stylesheet.NoPublication}>
                <Title theme={props.theme} font={props.font} style={TitleStyle}>
                    no publications so far
                </Title>
                <Discription theme={props.theme}>
                    no publications yet, we are working on releasing articles very soon, 
                    check back with us
                </Discription>
                <Button font={props.font} style={ButtonStyle}>
                    {<Link to='/'>Go To Home Page</Link>}
                </Button>
            </div>
        </div>
    )
}

export default Publication;