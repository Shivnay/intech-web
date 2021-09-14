import React from 'react';
import Stylesheet from './Development.module.css';
import Classnames from 'classnames';
import Title from '../../elements/Title/Title';
import Discription from '../../elements/Discription/Discription';
import Button from '../../elements/Button/Button';
import Link from '../../elements/Link/Link';
import DevelopmentSummary from '../../containers/DevelopmentSummary/DevelopmentSummary';

function Development(props) {
    let DigitalMediaStyle = Classnames(
        Stylesheet.Development, {
            [Stylesheet[props.theme]]: true
        }
    )
    return (
        <div className={DigitalMediaStyle}>
            <DevelopmentSummary theme={props.theme} font={props.font} 
                sector='Development' modal={props.onModalShow}/>
            <div className={Stylesheet.Projects}>
                {/* showcase digital media projects */}
            </div>
            <div className={Stylesheet.Pricing}>
                <div className={Stylesheet.Container}>
                    <Title theme={props.theme} font={props.font} style={{font: 'large'}}>
                        pricing
                    </Title>
                    <Discription theme={props.theme} font={props.font} 
                        style={{font: 'small'}}>
                        contact us for pricing details of your development needs so we can give
                        you the best possiable deal based on your specific requirments.
                    </Discription>
                    <Button theme={props.theme} font={props.font}  
                        style={{font: 'medium', theme: 'blue'}}>
                        <Link theme={props.theme} font={props.font} 
                        url='mailto:info@intecfiji.com?subject=Marketing - Pricing'>
                            enquire now
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
        
    )
}

export default Development;