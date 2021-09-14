import React from 'react'
import Stylesheet from './Profile.module.css'
import Classnames from 'classnames'
import Title from '../../elements/Title/Title'
import Discription from '../../elements/Discription/Discription'
import SocialMedia from '../../elements/SocialMedia/SocialMedia'
import { ico_facebook, ico_instagram, ico_twitter, ico_linked_in } from '../../icon'

function Profile(props) {
    let ProfileStyle = Classnames(
        Stylesheet.Profile
    )
    return(
        <div className={ProfileStyle}>
            <div className={Stylesheet.Icon}>
                <img src={props.icon} alt="Profile Icon"/>
            </div>
            <div className={Stylesheet.Infomation}>
                <Title font={props.font} theme={props.theme} 
                    style={props.style.title}>
                    {props.title}
                </Title>
                <Title font={props.font} theme={props.theme} 
                    style={props.style.subTitle}>
                    {props.subTitle}
                </Title>
                <Discription font={props.font}
                    theme={props.theme} style={props.style.discription}>
                    {props.discription}
                </Discription>
                <Discription font={props.font} 
                    theme={props.theme} style={props.style.quote}>
                    {props.quote}
                </Discription>
                <div className={Stylesheet.Row}>
                    {props.facebook !== undefined ? 
                        <SocialMedia account={props.facebook} icon={ico_facebook}
                            font={props.font} theme={props.theme} 
                            style={props.style.socialMediaAccount}/> : null}
                    {props.facebook !== undefined ? 
                        <SocialMedia account={props.instagram} icon={ico_instagram}
                            font={props.font} theme={props.theme} 
                            style={props.style.socialMediaAccount}/> : null}
                    {props.facebook !== undefined ? 
                        <SocialMedia account={props.twitter} icon={ico_twitter}
                            font={props.font} theme={props.theme} 
                            style={props.style.socialMediaAccount}/> : null}
                    {props.facebook !== undefined ? 
                        <SocialMedia account={props.linkedin} icon={ico_linked_in}
                            font={props.font} theme={props.theme} 
                            style={props.style.socialMediaAccount}/> : null}
                </div>
            </div>
        </div>
    )
}

export default Profile;