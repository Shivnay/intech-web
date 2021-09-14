import React from 'react';
import Stylesheet from './OurTeam.module.css';
import Classnames from 'classnames';
import Title from '../../elements/Title/Title';
import Profile from '../../components/Profile/Profile';
import CAO_Profile_Icon from '../../assets/cao-profile.png';
import CTO_Profile_Icon from '../../assets/cto-profile.png';

function OurTeam(props) {
    let OutTeamStyle = Classnames(
        Stylesheet.Executives, {
            [Stylesheet[props.theme]] : true
        }
    )
    let profileStyle = {
        'title': {font: 'medium'},
        'subTitle': {font: 'small'},
        'discription': {font: 'small'},
        'quote': {
            font: 'small',
            style: 'italic'
        },
        'socialMediaAccount': {font: 'medium'}
    }
    let titleStyle = {
        font: 'medium',
        'align': 'center'
    }
    return(
        <div className={OutTeamStyle}>
            <Title font={props.font} theme={props.theme} style={titleStyle}>our team</Title>
            <div className={Stylesheet.Row}>
                <Profile font={props.font} theme={props.theme} 
                    style={profileStyle} icon={CAO_Profile_Icon} 
                    title='james sharma, CAO' 
                    subTitle='founder, chief analytics officer' 
                    discription='our goal at intec is to provide the best possible 
                        analytical and marketing support to any and all up growing 
                        idealists, looking to grow their platform.'
                    quote='“What the mind of man can conceive and believe, it can achieve.” ~Napoleon Hill'/>
                <Profile font={props.font} theme={props.theme} 
                    style={profileStyle} icon={CTO_Profile_Icon} 
                    title='shivnay swamy, CTO' 
                    subTitle='co-Founder, Chief technology officer' 
                    discription='technology has become the foundation of growth and as 
                        such ideals become as strong as its foundation, at intec we provide 
                        the technology to power idea’s.'
                    quote='“Every once in a while, a new technology, an old problem, and a 
                        big idea turn into an innovation.” ~Dean Kamen'
                    linkedin='https://www.linkedin.com/in/shivnay-swamy-4798a2133/'/>
            </div>
        </div>
    )
}

export default OurTeam;