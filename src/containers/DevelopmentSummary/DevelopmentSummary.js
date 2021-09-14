import React from 'react'
import Stylesheet from './DevelopmentSummary.module.css'
import Classnames from 'classnames'
import Title from '../../elements/Title/Title'
import Discription from '../../elements/Discription/Discription'
import Service from '../../components/Service/Service'
import ServiceSummary from '../../components/ServiceSummary/ServiceSummary'
import application_vector from '../../assets/application-vector.png'
import { ico_android, ico_apple, ico_react, ico_code, ico_microsoft, ico_linux, ico_database, ico_globe_americas, ico_folder, ico_user_friends, ico_paper_plane, ico_user_clock, ico_robot, ico_bolt, ico_terminal } from '../../icon'
import Button from '../../elements/Button/Button'
import google_android_vector from '../../assets/google-android-vector.png'
import apple_vector from '../../assets/apple-vector.png'
import cross_platform_vector from '../../assets/cross-platform-vector.png'
import web_app_vector from '../../assets/web-app-vector.png'
import microsoft_windows_vector from '../../assets/microsoft-windows-vector.png'
import linux_vector from '../../assets/linux-vector.png'

function DevelopmentSummary(props) {

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
            theme: 'blue',
            font: 'small'
        },
        'title' : {
            font: 'small'
        }
    }
    let ButtonStyle = {
        font: 'medium',
        theme: 'blue',
        link : 'mailto:info@intecfiji.com?subject=Development'
    }
    let SummaryStyle = {
        'title' : {
            font: 'small'
        },
        'discription': {
            'font' : 'small'
        },
        'link' : {
            theme: 'blue',
            font: "small"
        },
        'button': {
            theme: 'blue',
            font: 'medium',
            link : 'mailto:info@intecfiji.com?subject=Development'
        }
    }
    let CloudServicesTitleStyle = {
        font: 'medium',
        align: 'center'
    }
    let CloudServiceStyle = {
        'icon' : {
            theme: 'blue',
            font: 'large'
        }, 
        'title' : {
            font: 'small'
        }
    }
    let VectorStyle = Classnames(
        Stylesheet.Vector, {
            [Stylesheet['animate-vector']] : true
        }
    )
    return(
        <div id='Development' className={ContainerStyle}>
            <div className={Stylesheet.Header}>
                <div className={Stylesheet.Intro}>
                    <Title theme={props.theme} font={props.font} style={TitleStyle}>
                        an app for every platform
                    </Title>
                    <Discription theme={props.theme}>
                        need a web app or maybe a mobile app to streamline your 
                        business or you need a custom application for your business?, 
                        whatever the need we have you covered, we provide full stack engineering 
                        for all the major platforms along with cross-platform support, 
                        all seamlessly configured with our cloud and insight platform to give 
                        your app’s a boost.
                    </Discription>
                    <div className={Stylesheet['Services-Container']}>
                        <div className={Stylesheet.Row}>
                            <Service titleText='google android' icon={ico_android} 
                                theme={props.theme} font={props.font}
                                style={ServiceStyle}/>
                            <Service titleText='apple IOS' icon={ico_apple} 
                                theme={props.theme} font={props.font}
                                style={ServiceStyle}/>
                        </div>
                        <div className={Stylesheet.Row}>
                            <Service titleText='cross-platform' icon={ico_react} 
                                theme={props.theme} font={props.font}
                                style={ServiceStyle}/>
                            <Service titleText='web app' icon={ico_code} 
                                theme={props.theme} font={props.font}
                                style={ServiceStyle}/>
                        </div>
                        <div className={Stylesheet.Row}>
                            <Service titleText='gnu+ linux' 
                                icon={ico_linux} theme={props.theme} 
                                font={props.font} style={ServiceStyle}/>
                            <Service titleText='microsoft windows' 
                                icon={ico_microsoft} theme={props.theme} 
                                font={props.font} style={ServiceStyle}/>
                        </div>
                    </div>
                    <div className={Stylesheet.Controls}>
                        <Button font={props.font} 
                            style={ButtonStyle}>
                            go global
                        </Button>
                    </div>
                    
                </div>
                <div className={VectorStyle}>
                    <img className={Stylesheet['Graph-Vector']} 
                        src={application_vector} alt="Graph Vector"/>
                </div>
            </div>
            <div className={Stylesheet.Services}>
                <div className={Stylesheet.Row}>
                    <ServiceSummary 
                        icon={google_android_vector} 
                        font={props.font}
                        theme={props.theme}
                        titleText='google android'
                        style={SummaryStyle}
                        discriptionText='google’s android is one the most popular mobile 
                            OS in the world, our android development sector will build and 
                            publish your native app, with global standards and integration 
                            with any google api’s with our cloud and insight platform giving 
                            you an added advantage.'
                        linkText='learn more'
                        linkURL='mailto:info@intecfiji.com?subject=Android App'
                        buttonText='power the droid'/>
                    <ServiceSummary 
                        icon={apple_vector} 
                        font={props.font}
                        theme={props.theme}
                        titleText='apple IOS'
                        style={SummaryStyle}
                        discriptionText='apple’s IOS is the second largest mobile os around, 
                            having over 2.2 million apps on the apple store, our ios 
                            development sector will design and deploy your native app to target 
                            the iPhone  and iPad platform for maximum exposure, and with full 
                            integration with our cloud and insight platform.'
                        linkText='learn more'
                        linkURL='mailto:info@intecfiji.com?subject=IOS App'
                        buttonText='think different'/>
                </div>
                <div className={Stylesheet.Row}>
                    <ServiceSummary 
                        icon={cross_platform_vector} 
                        font={props.font}
                        theme={props.theme}
                        titleText='cross-platform'
                        style={SummaryStyle}
                        discriptionText='cross-platform is the way to go if you want your app to 
                            have full exposure and availability. With our cross-platform sector 
                            we will build you a single solution that works on both android and 
                            IOS, with maximum code re-useability and native features.'
                        linkText='learn more'
                        linkURL='mailto:info@intecfiji.com?subject=Cross-Platform App'
                        buttonText='best of both worlds'/>
                    <ServiceSummary 
                        icon={web_app_vector} 
                        font={props.font}
                        theme={props.theme}
                        titleText='web app'
                        style={SummaryStyle}
                        discriptionText='web apps have never been more accessable and popular 
                            then it is today, with our web platform we will bring your ideas into 
                            the hands of billions of people, all our theme templates are designed 
                            customly for you, making your app stand out from the rest.'
                        linkText='learn more'
                        linkURL='mailto:info@intecfiji.com?subject=Web App'
                        buttonText='get online'/>
                </div>
                <div className={Stylesheet.Row}>
                    <ServiceSummary 
                        icon={microsoft_windows_vector} 
                        font={props.font}
                        theme={props.theme}
                        titleText='microsoft windows'
                        style={SummaryStyle}
                        discriptionText='microsoft windows is one of the most popular desktop 
                            operating systems in the world, and with the windows 8 and 10 releases 
                            came a new market for portable applications, a single UWP 
                            (universal windows platform) app can be configured for all compatible 
                            Microsoft platforms including mobile and Xbox.'
                        linkText='learn more'
                        linkURL='mailto:info@intecfiji.com?subject=Windows App'
                        buttonText='be whats next'/>
                    <ServiceSummary 
                        icon={linux_vector} 
                        font={props.font}
                        theme={props.theme}
                        titleText='gnu+ linux'
                        style={SummaryStyle}
                        discriptionText='over the recent years Linux has been streamlined for a 
                            casual desktop operating system experience with distributions like 
                            ubuntu, arch and fedora Linux is categorized as an operating system 
                            for everyone, with its app store’s housing thousands of consumer 
                            applications and tools.'
                        linkText='learn more'
                        linkURL='mailto:info@intecfiji.com?subject=Linux App'
                        buttonText='root it up'/>
                </div>
            </div>
            <div className={Stylesheet['Cloud-Services']}>
                <Title theme={props.theme} font={props.font} 
                    style={CloudServicesTitleStyle}>
                    included cloud services
                </Title>
                <div className={Stylesheet.Row}>
                    <Service 
                        font={props.font}
                        theme={props.theme}
                        titleText='database'
                        icon={ico_database}
                        discriptionText='Your app data is synced and stored 
                            at a global scale.'
                        style={CloudServiceStyle}/>
                    <Service 
                        font={props.font}
                        theme={props.theme}
                        titleText='hosting'
                        icon={ico_globe_americas}
                        discriptionText='Your web apps are covered with added speed and security.'
                        style={CloudServiceStyle}/>
                    <Service 
                        font={props.font}
                        theme={props.theme}
                        titleText='storage'
                        icon={ico_folder}
                        discriptionText='your files can be stored and shared at the global scale.'
                        style={CloudServiceStyle}/>
                </div>
                <div className={Stylesheet.Row}>
                    <Service 
                        font={props.font}
                        theme={props.theme}
                        titleText='authentication'
                        icon={ico_user_friends}
                        discriptionText='authenticate your users securely.'
                        style={CloudServiceStyle}/>
                    <Service 
                        font={props.font}
                        theme={props.theme}
                        titleText='messaging'
                        icon={ico_paper_plane}
                        discriptionText='send targeted messages and notifications directly to your users.'
                        style={CloudServiceStyle}/>
                    <Service 
                        font={props.font}
                        theme={props.theme}
                        titleText='insight'
                        icon={ico_bolt}
                        discriptionText='you can manage your app features, and content through our interactive insight platform.'
                        style={CloudServiceStyle}/>
                </div>
                <Title theme={props.theme}
                    font={props.font} style={CloudServicesTitleStyle}>
                    what we cover for you
                </Title>
                <div className={Stylesheet.Row}>
                    <Service 
                        font={props.font}
                        theme={props.theme}
                        titleText='monitoring'
                        icon={ico_terminal}
                        discriptionText='we will monitor your apps performance and give you insight and recommendations.'
                        style={CloudServiceStyle}/>
                    <Service 
                        font={props.font}
                        theme={props.theme}
                        titleText='machine learning'
                        icon={ico_robot}
                        discriptionText='take your app to the next level, we will integrate ML to your mobile apps for smart functionality.'
                        style={CloudServiceStyle}/>
                    <Service 
                        font={props.font}
                        theme={props.theme}
                        titleText='predictions'
                        icon={ico_user_clock}
                        discriptionText='smart user segmentation based on user predicted behavior.'
                        style={CloudServiceStyle}/>
                </div>
            </div>
        </div>
    )
}

export default DevelopmentSummary;