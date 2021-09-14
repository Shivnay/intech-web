import React from 'react';
import Stylesheet from './Modal.module.css';
import Classnames from 'classnames';

function Modal(props) {
    
    return (
        <div className={Classnames(
                Stylesheet.Container, {
                    [Stylesheet['show-container']]: props.show,
                    [Stylesheet['hide-container']]: !props.show
                }
            )}>
            <div className={Classnames(
                Stylesheet.Overlay, {
                    [Stylesheet['show-overlay']]: props.show,
                    [Stylesheet['hide-overlay']]: !props.show
                }
            )} onClick={props.onClose}></div>
            <div className={Classnames(
                Stylesheet.Modal, {
                    [Stylesheet['show-modal']]: props.show,
                    [Stylesheet['hide-modal']]: !props.show
                }
            )}>
                <div className={Stylesheet.Container}>{props.children}</div>
            </div>
        </div>
    )
}

export default Modal;