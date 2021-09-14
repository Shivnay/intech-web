import React from 'react';
import Stylesheet from './Home.module.css';
import LandingPage from '../../containers/LandingPage/LangingPage';
import About from '../../containers/About/About';
import DigitalMediaSummary from '../../containers/DigitalMediaSummary/DigitalMediaSummary'
import MarketingSummary from '../../containers/MarketingSummary/MarketingSummary';
import DevelopmentSummary from '../../containers/DevelopmentSummary/DevelopmentSummary';
import OurTeam from '../../containers/OurTeam/OurTeam';

function Home(props) {
    return (
        <div className={Stylesheet.Home}>
            <LandingPage />
            <About theme={props.theme} font={props.font}/>
            <DigitalMediaSummary theme={props.theme} font={props.font} 
            sector={props.sector} modal={props.onModalShow}/>
            <MarketingSummary theme={props.theme} font={props.font} 
            sector={props.sector} modal={props.onModalShow}/>
            <DevelopmentSummary theme={props.theme} font={props.font}
            sector={props.sector} modal={props.onModalShow}/>
            <OurTeam theme={props.theme} font={props.font}
            sector={props.sector} modal={props.onModalShow}/>
        </div>
        
    )
}

export default Home;