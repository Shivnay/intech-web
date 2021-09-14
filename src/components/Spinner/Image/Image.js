import React from 'react';
import Stylesheet from './Image.module.css';
import Classnames from 'classnames';

function Spinner(props) {

    return (
        <div className={Classnames(
            Stylesheet.Container, {
                [Stylesheet.Show] : props.show,
                [Stylesheet.Hide] : !props.show
            }
        )}>
            <div className={Stylesheet.Circle}></div>
            <div className={Stylesheet.Circle}></div>
            <div className={Stylesheet.Circle}></div>
        </div>
    )
}

export default Spinner;