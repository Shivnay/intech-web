import React from 'react'
import Stylesheet from './MarketingSummary.module.css'
import Classnames from 'classnames'
import Title from '../../elements/Title/Title'
import Discription from '../../elements/Discription/Discription'
import Service from '../../components/Service/Service'
import graph_vector from '../../assets/graph-vector.png'
import { ico_thumbs_up, ico_ad, ico_cog, ico_at } from '../../icon'
import Button from '../../elements/Button/Button'
import ServiceSummary from '../../components/ServiceSummary/ServiceSummary'
import social_media_vector from '../../assets/social-media-vector.png'
import seo_vector from '../../assets/seo-vector.png'
import email_marketing_vector from '../../assets/email-marketing-vector.png'
import advertising_vector from '../../assets/advertising-vector.png'


function Marketing(props) {

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
            theme: 'purple',
            font: 'small'
        },
        'title' : {
            font: 'small'
        }
    }
    let ButtonStyle = {
        font: 'medium',
        theme: 'purple',
        link : 'mailto:info@intecfiji.com?subject=Marketing'
    }
    let SummaryStyle = {
        'title' : {
            font: 'small'
        },
        'discription': {
            'font' : 'small'
        },
        'link' : {
            theme: 'purple',
            font: "small"
        },
        'button': {
            theme: 'purple',
            font: 'medium',
            link : 'mailto:info@intecfiji.com?subject=Marketing'
        }
    }
    let VectorStyle = Classnames(
        Stylesheet.Vector, {
            [Stylesheet['animate-vector']] :  true
        }
    )
    
    return(
        <div id='Marketing' className={ContainerStyle}>
            <div className={Stylesheet.Header}>
                <div className={Stylesheet.Intro}>
                    <Title theme={props.theme} font={props.font} 
                        style={TitleStyle} >
                        lets get you out there
                    </Title>
                    <Discription theme={props.theme} >
                        let us bring your idea into the 
                        spotlight, with our social media marketing and brand 
                        advert strategies, we offer a diverse solution set that 
                        will suit you’r needs.
                    </Discription>
                    <div className={Stylesheet['Services-Container']}>
                        <div className={Stylesheet.Row}>
                            <Service titleText='social media' icon={ico_thumbs_up} 
                                theme={props.theme} font={props.font}
                                style={ServiceStyle}/>
                            <Service titleText='advertising' icon={ico_ad} 
                                theme={props.theme} font={props.font}
                                style={ServiceStyle}/>
                        </div>
                        <div className={Stylesheet.Row}>
                            <Service titleText='email marketing' icon={ico_at} 
                                theme={props.theme} font={props.font}
                                style={ServiceStyle}/>
                            <Service titleText='search engine optimization' 
                                icon={ico_cog} theme={props.theme} 
                                font={props.font} style={ServiceStyle}/>
                        </div>
                    </div>
                    <div className={Stylesheet.Controls}>
                        <Button font={props.font} 
                            style={ButtonStyle}>spark your idea</Button>
                    </div>
                    
                </div>
                <div className={VectorStyle}>
                    <img className={Stylesheet['Graph-Vector']} 
                        src={graph_vector} alt="Graph Vector"/>
                </div>
            </div>
            <div className={Stylesheet.Services}>
                <div className={Stylesheet.Row}>
                    <ServiceSummary 
                        icon={social_media_vector} 
                        font={props.font}
                        theme={props.theme}
                        titleText='social media marketing'
                        style={SummaryStyle}
                        discriptionText='91 percent of absence and marketing is done through 
                            social media, quite an impactful platform to showcase your ideas, 
                            dont you think? with our marketing strategies your idea will be on 
                            the eye’s of the world and appreciated by 3.5 billion users world-wide.'
                        linkText='learn more'
                        linkURL='mailto:info@intecfiji.com?subject=Social Media Marketing'
                        buttonText='join the social net'/>
                    <ServiceSummary 
                        icon={seo_vector} 
                        font={props.font}
                        theme={props.theme}
                        titleText='search engine optimization'
                        style={SummaryStyle}
                        discriptionText='91.5 % of traffic shares generated by the sites listed 
                            on the first google search result page, and over 40% of revenue is 
                            captured by organic traffic with over 73 billion phone calls generated 
                            in the year 2018 alone having a total $79 billion spent on SEO by companies 
                            by the year 2020. '
                        linkText='learn more'
                        linkURL='mailto:info@intecfiji.com?subject=Search Engine Optimization'
                        buttonText='seo me'/>
                </div>
                <div className={Stylesheet.Row}>
                    <ServiceSummary 
                        icon={email_marketing_vector} 
                        font={props.font}
                        theme={props.theme}
                        titleText='email marketing'
                        style={SummaryStyle}
                        discriptionText='81% of SMB’s (Server message block) rely on email for their primary customer
                            acquisition with over 3.9 billion email users by the year 2020, and with every $1 
                            spent on email marketing an average return rate of $42 is expected. need we say more?'
                        linkText='learn more'
                        linkURL='mailto:info@intecfiji.com?subject=Email Marketing'
                        buttonText='spread the mail'/>
                    <ServiceSummary 
                        icon={advertising_vector} 
                        font={props.font}
                        theme={props.theme}
                        titleText='advertising'
                        style={SummaryStyle}
                        discriptionText='83% of mobile advertisements on YouTube receive viewer attention 
                            with over 30 million visitors per day and 5 billion videos watched daily. with 
                            our online marketing tactics, ranging from YouTube to local TV broadcasts your 
                            business will always be in the spotlight.'
                        linkText='learn more'
                        linkURL='mailto:info@intecfiji.com?subject=Advertising'
                        buttonText='ad-sense'/>
                </div>
            </div>
        </div>
    )
}

export default Marketing;