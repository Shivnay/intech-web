import React from 'react';
import Stylesheet from './Standard.module.css';
import Classnames from 'classnames';

function Spinner(props) {
    let SpinerStyle = Classnames(
        Stylesheet.Spiner, {
            [Stylesheet[props.theme]] : true
        }
    )
    return(
        <div className={SpinerStyle}>
            <div className={Stylesheet.Circle}></div>
            <div className={Stylesheet.Line}></div>
        </div>
    )
}

export default Spinner;