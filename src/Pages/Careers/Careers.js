import React from 'react';
import Stylesheet from './Careers.module.css';
import Classnames from 'classnames';
import {Link} from 'react-router-dom';
import Title from '../../elements/Title/Title';
import Discription from '../../elements/Discription/Discription';
import Button from '../../elements/Button/Button';

function Careers(props) {
    let TitleStyle = {
        font: "medium"
    }
    let ButtonStyle = {
        font: 'medium',
        theme: 'blue'
    }
    let ContainerStyle = Classnames(
        Stylesheet.Container, {
            [Stylesheet[props.theme]]: true
        }
    )
    return (
        <div className={ContainerStyle}>
             <div className={Stylesheet.NoCareers}>
                <Title theme={props.theme} font={props.font} 
                    style={TitleStyle}>nothing to show yet</Title>
                <Discription theme={props.theme}>
                    we do not have any positions open yet, check back with us soon.
                </Discription>
                <Button font={props.font} style={ButtonStyle}>
                    {<Link to='/'>Go To Home Page</Link>} 
                </Button>
            </div>
        </div>
    )
}

export default Careers;