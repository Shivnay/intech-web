import React from 'react'
import Stylesheet from './ServiceCard.module.css'
import Link from '../../elements/Link/Link'
import Classnames from 'classnames'
import Title from '../../elements/Title/Title'
import Discription from '../../elements/Discription/Discription'

function ServiceCard(props) {

    let ServiceCardStyle = Classnames(
        Stylesheet.Card, {
            [Stylesheet[props.theme]] : true
        }
    )
    return(
        <div className={ServiceCardStyle}>
            <Title font={props.font} theme={props.theme} 
                style={props.style.title}>
                {props.titleText}
            </Title>
            <Discription font={props.font} theme={props.theme} 
                style={props.style.discription}>
                {props.discriptionText}
            </Discription>
            <Link url={props.linkURL} font={props.font}
                theme={props.theme} style={props.style.link}>
                {props.linkText}
            </Link>
        </div>
    )
}

export default ServiceCard;