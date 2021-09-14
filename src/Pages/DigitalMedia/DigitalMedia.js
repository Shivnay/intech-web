import React from 'react';
import Stylesheet from './DigitalMedia.module.css';
import Classnames from 'classnames';
import Title from '../../elements/Title/Title';
import Discription from '../../elements/Discription/Discription';
import Button from '../../elements/Button/Button';
import Link from '../../elements/Link/Link';
import DigitalMediaSummary from '../../containers/DigitalMediaSummary/DigitalMediaSummary';

function DigitalMedia(props) {
    
    let DigitalMediaStyle = Classnames(
        Stylesheet.DigitalMedia, {
            [Stylesheet[props.theme]]: true
        }
    )
    return (
        <div className={DigitalMediaStyle}>
            <DigitalMediaSummary theme={props.theme} font={props.font} 
                sector='Digital-Media' modal={props.onModalShow}/>
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
                        contact us for pricing details of your digital media productions so we can give
                        you the best possiable deal based on your specific requirments.
                    </Discription>
                    <Button theme={props.theme} font={props.font}  
                        style={{font: 'medium', theme: 'magenta-purple'}}>
                        <Link theme={props.theme} font={props.font} 
                        url='mailto:info@intecfiji.com?subject=Digital Media - Pricing'>
                            enquire now
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
        
    )
}

export default DigitalMedia;