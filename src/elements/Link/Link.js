import React from 'react';
import Stylesheet from './Link.module.css';
import Classnames from 'classnames';
import {Link as ReactRouterLink} from 'react-router-dom';

function Link(props) {
    //classify font sizes 
    let classifyFont = function() {
        let customeFont = props?.style?.font;
        let globalFont = props.font;
        if (customeFont !== undefined) {
            const FontStandards = {small:0, medium:1, large:2,'x-large':3}
            //identify custome font request
            if (FontStandards[customeFont] > FontStandards[globalFont])
                return customeFont;
        }
        return globalFont;
    }
    let classifyTheme = function() {
        if (props.theme !== 'dark' && props?.style?.theme !== undefined)
            return props.style.theme;
        return props.theme;
    }
    let LinkStyle = Classnames(
        Stylesheet.Link, {
            [Stylesheet[classifyFont()]] : true,
            [Stylesheet[classifyTheme()]] : true,
            [Stylesheet['underline']] : props.style?.decoration !== undefined
                ? props.style.decoration : false,
            [Stylesheet['no-underline']]: 
                props.style?.decoration !== undefined 
                && !props.style?.decoration
                ? !props.style.decoration : false
        }
    )
    if (props.type !== undefined && props.type === 'react-router-link') {
        return (
            <p className={LinkStyle} onClick={_=> window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <ReactRouterLink to={props.url}>{props.children}</ReactRouterLink>
            </p>
        )
    }
    return (
        <a className={LinkStyle} href={props.url !== null ? props.url : null}
            onClick={props.onClick !== null ? props.onClick : void(null)}>
            {props.children}
        </a>
    )
}

export default Link;