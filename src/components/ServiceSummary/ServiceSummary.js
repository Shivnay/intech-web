import React from 'react'
import Stylesheet from './ServiceSummary.module.css'
import Classnames from 'classnames'
import Title from '../../elements/Title/Title'
import Discription from '../../elements/Discription/Discription';
import Link from '../../elements/Link/Link';
import Button from '../../elements/Button/Button';

function ServiceSummary(props) {
    
    let SummaryStyle = Classnames(
        Stylesheet.Summary
    )
    return(
        <div className={SummaryStyle}>
            <div className={Stylesheet.Icon}>
                <img src={props.icon} alt="Summary icon"/>
            </div>
            <div className={Stylesheet.Discription}>
                <Title font={props.font} theme={props.theme} 
                    style={props.style.title}>
                    {props.titleText}
                </Title>
                <Discription font={props.font} theme={props.theme} 
                    style={props.style.discription}>
                    {props.discriptionText}
                </Discription>
                <div className={Stylesheet.Controls}>
                    <Link url={props.linkURL} font={props.font} theme={props.theme} 
                        style={props.style.link}>
                        {props.linkText}
                    </Link>
                    <Button font={props.font} theme={props.theme} 
                        style={props.style.button}>
                        {props.buttonText}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ServiceSummary;