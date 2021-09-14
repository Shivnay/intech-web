import React from 'react'
import Stylesheet from './Service.module.css'
import Discription from '../../elements/Discription/Discription'
import Classnames from 'classnames'
import Title from '../../elements/Title/Title';

function Service(props) {
    //set service style
    let ServiceStyle = Classnames(
            Stylesheet.Service, {
            [Stylesheet[props.font]] : true,
            [Stylesheet[props.theme]] : true
        }
    )
    let IconStyle = Classnames(
        Stylesheet.Icon, {
            [Stylesheet['ico-'+props.style.icon.theme]] : true,
            [Stylesheet['ico-'+props.style.icon.font]] : true
        }
    )
    return(
        <div className={ServiceStyle}>
            <div className={IconStyle}>
                <p>{props.icon}</p> 
            </div>
            <div className={Stylesheet['Service-Discription']}>
                <Title font={props.font}
                    theme={props.theme} style={props.style.title}>
                    {props.titleText}
                </Title>
                <Discription font={props.font} theme={props.theme}
                    style={props.style.discription}>
                    {props.discriptionText}
                </Discription>
            </div>
        </div>
    )
}

export default Service;