import React from 'react';
import Stylesheet from './Blog.module.css';
import Classnames from 'classnames';
// import * as Insight from '../../insight/index';
import {Link} from 'react-router-dom';
import Title from '../../elements/Title/Title';
import Discription from '../../elements/Discription/Discription';
import Button from '../../elements/Button/Button';

function Blog(props) {
    
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
            <div className={Stylesheet.NoBlogs}>
                <Title theme={props.theme} font={props.font} style={TitleStyle}>
                    no blog posts yet
                </Title>
                <Discription theme={props.theme}>
                        we will upload something very soon, keep checking back with us
                    </Discription>
                <Button font={props.font} style={ButtonStyle}>
                    {<Link to='/'>Go To Home Page</Link>} 
                </Button>
            </div>
        </div>
    )
}

export default Blog;