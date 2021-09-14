import React from 'react'
import Stylesheet from './DigitalMediaSummary.module.css'
import Classnames from 'classnames'
import Title from '../../elements/Title/Title'
import Discription from '../../elements/Discription/Discription'
import Service from '../../components/Service/Service'
import digital_media_vector from '../../assets/digital-media-vector.png'
import { ico_paint_brush, ico_font, ico_magic, ico_camera_retro } from '../../icon'
import Button from '../../elements/Button/Button'
import ServiceSummary from '../../components/ServiceSummary/ServiceSummary'
import brand_vector from '../../assets/brand-vector.png'
import typography_vector from '../../assets/typography-vector.png'
import graphic_design_vector from '../../assets/graphic-design-vector.png'
import videography_vector from '../../assets/videography-vector.png'


function DigitalMediaSummary(props) {
    let ContainerStyle = Classnames(
        Stylesheet.Container, {
            [Stylesheet[props.theme]]: true
        }
    )
    let TitleStyle = {
        font: "medium"
    }
    let ServiceStyle = {
        'icon' : {
            theme: 'magenta-purple',
            font: 'small'
        },
        'title' : {
            font: 'small'
        }
    }
    let ButtonStyle = {
        font: 'medium',
        theme: 'magenta-purple',
        link : 'mailto:info@intecfiji.com?subject=Digital Media'
    }
    let SummaryStyle = {
        'title' : {
            font: 'small'
        },
        'discription': {
            'font' : 'small'
        },
        'link' : {
            theme: 'magenta-purple',
            font: "small"
        },
        'button': {
            theme: 'magenta-purple',
            font: 'medium',
            link : 'mailto:info@intecfiji.com?subject=Digital Media'
        }
    }
    let VectorStyle = Classnames(
        Stylesheet.Vector, {
            [Stylesheet['animate-vector']] : true
        }
    )
    
    return(
        <div id='Digital-Media' className={ContainerStyle}>
            <div className={Stylesheet.Header}>
                <div className={Stylesheet.Intro}>
                    <Title theme={props.theme} font={props.font} style={TitleStyle}>
                        shine bright
                    </Title>
                    <Discription theme={props.theme}>
                        Need a creative brand?, maybe a fresh new logo to spice up your company, 
                        or maybe you're looking to create a beautiful advertisement to show to the world?, whatever 
                        your needs our digital media sector has you covered with our beautiful design templets, 
                        typography to give your business an edge.
                    </Discription>
                    <div className={Stylesheet['Services-Container']}>
                        <div className={Stylesheet.Row}>
                            <Service titleText='Brand' icon={ico_paint_brush} 
                                theme={props.theme} font={props.font}
                                style={ServiceStyle}/>
                            <Service titleText='Typography' icon={ico_font} 
                                theme={props.theme} font={props.font}
                                style={ServiceStyle}/>
                        </div>
                        <div className={Stylesheet.Row}>
                            <Service titleText='graphic design' icon={ico_magic} 
                                theme={props.theme} font={props.font}
                                style={ServiceStyle}/>
                            <Service titleText='videography' icon={ico_camera_retro} 
                                theme={props.theme} font={props.font}
                                style={ServiceStyle}/>
                        </div>
                    </div>
                    <div className={Stylesheet.Controls}>
                        <Button font={props.font} style={ButtonStyle}>
                            get started with digital media
                        </Button>
                    </div>
                    
                </div>
                <div className={VectorStyle}>
                    <img className={Stylesheet['digital-media-Vector']} 
                        src={digital_media_vector} alt="Graph Vector"/>
                </div>
            </div>
            <div className={Stylesheet.Services}>
                <div className={Stylesheet.Row}>
                    <ServiceSummary 
                        icon={brand_vector} 
                        font={props.font}
                        theme={props.theme}
                        titleText='Brand'
                        style={SummaryStyle}
                        discriptionText='a lot of consumers feel that a more positive about a brand after reading 
                        customized content and On average, it takes 5 to 7 impressions for people to 
                        remember your brand with added brand consistency across all platforms revenue 
                        can increase by up to 23%. Lets create you’r brand.'
                        linkText='learn more'
                        linkURL='mailto:info@intecfiji.com?subject=Branding'
                        buttonText='brand me'/>
                    <ServiceSummary 
                        icon={typography_vector} 
                        font={props.font}
                        theme={props.theme}
                        titleText='typography'
                        style={SummaryStyle}
                        discriptionText='get a custom font made for your company to make you stand out from the rest, 
                            we will make sure your brand and theme both look and feel amazing to the world.'
                        linkText='learn more'
                        linkURL='mailto:info@intecfiji.com?subject=Typography'
                        buttonText='find a font'/>
                </div>
                <div className={Stylesheet.Row}>
                    <ServiceSummary 
                        icon={graphic_design_vector} 
                        font={props.font}
                        theme={props.theme}
                        titleText='graphic design'
                        style={SummaryStyle}
                        discriptionText='Graphic design is the process of visual communication and 
                            problem-solving with typography, photography, iconography 
                            and illustration'
                        linkText='learn more'
                        linkURL='mailto:info@intecfiji.com?subject=Grapic Design'
                        buttonText='get creative'/>
                    <ServiceSummary 
                        icon={videography_vector} 
                        font={props.font}
                        theme={props.theme}
                        titleText='videography'
                        style={SummaryStyle}
                        discriptionText='Cinematography is the art of Film-making used in a wide range 
                            if areas, namely weddings, corporate and Real Estate.'
                        linkText='learn more'
                        linkURL='mailto:info@intecfiji.com?subject=Videography'
                        buttonText='cinematic memories'/>
                </div>
            </div>
        </div>
    )
}

export default DigitalMediaSummary;