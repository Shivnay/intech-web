import React from 'react'
import Stylesheet from './About.module.css'
import Title from '../../elements/Title/Title'
import Service from '../../components/Service/Service'
import Video from '../../elements/Video/Video'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Classnames from 'classnames'
import { ico_question, ico_cogs, ico_user_check } from '../../icon'

class About extends React.Component {
    
    render() {
        let AboutStyle = Classnames(
            Stylesheet.Container, {
                [Stylesheet[this.props.theme]] : true
            }
        )
        let ServiceStyle = {
            'icon' : {
                theme: 'cyan-blue',
                font: 'medium'
            },
            'title' : {
                font: 'small'
            }
        }
        let ServiceCardStyle = {
            'title' : {
                font: 'small'
            },
            'discription' : {
                font: 'small'
            },
            'link' : {
                theme: 'cyan-blue',
                decoration: false,
                font: 'small'
            }
        }
        let titleStyle = {
            font: 'medium'
        }
        let videoStyle = {
            theme : 'darkslategray'
        }
        return (
            <div id='About' className={AboutStyle}>
                <div className={Stylesheet.About}>
                    <div className={Stylesheet['Learn-More']}>
                        <Title font='small' theme={this.props.theme} style={titleStyle}>
                            learn more
                        </Title>
                        <hr />
                        <Service 
                            icon={ico_question} 
                            titleText='what is Intec?' 
                            theme={this.props.theme}
                            font={this.props.font}
                            style={ServiceStyle}/>
                        <Service 
                            icon={ico_cogs} 
                            titleText='what services we offer?' 
                            theme={this.props.theme}
                            font={this.props.font}
                            style={ServiceStyle}/>
                        <Service 
                            icon={ico_user_check} 
                            titleText='how do i get started?' 
                            theme={this.props.theme}
                            font={this.props.font}
                            style={ServiceStyle}/>
                    </div>
                    <div className={Stylesheet['Intro-Video']}>
                        <Video src='/media/video/intro.mp4' url='relative' size='medium' style={videoStyle}/>
                    </div>
                </div>
                <div className={Stylesheet.Services}>
                    <ServiceCard 
                        theme={this.props.theme}
                        font={this.props.font}
                        titleText='grow your business, with our marketing platform'
                        discriptionText='business marketing is one of our core services which 
                            offers a rang of options for you to choose from, and integration  
                            with our insight platform makes managing your market seamless.'
                        linkText='learn more'
                        linkURL='#Marketing'
                        style={ServiceCardStyle}/>
                    <ServiceCard 
                        theme={this.props.theme}
                        font={this.props.font}
                        titleText='custom apps for any platform'
                        discriptionText='with our software and cloud platform we can build a 
                            solution for any of your needs, all apps are linked to our insight 
                            platform so you can monitor and make updates to your app’s on the fly.'
                        linkText='learn more'
                        linkURL='#Development'
                        style={ServiceCardStyle}/>
                    <ServiceCard 
                        theme={this.props.theme}
                        font={this.props.font}
                        titleText='empowering your ideas with the cloud'
                        discriptionText='our cloud services offer hosting and backend solutions 
                            for your applications, including Oauth and distributed databases, so 
                            your cloud services scale with your business.'
                        linkText='learn more'
                        linkURL='#Development'
                        style={ServiceCardStyle}/>
                </div>
            </div>
        )
    }
}

export default About;