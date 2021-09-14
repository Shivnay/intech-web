import React from 'react'
import Stylesheet from './PopUp.module.css'
import Classnames from 'classnames'
import Title from '../../elements/Title/Title'
import { ico_times } from '../../icon'
import Discription from '../../elements/Discription/Discription'

class PopUp extends React.Component {

    constructor(props) {
        super(props);
        
        this.closePopUp = this.closePopUp.bind(this);
    }   

    closePopUp() {
        //notify app component of popup close
        this.props.close();
    }

    render() {
        // update popup docked state
        let ContainerStyle = Classnames(
            Stylesheet.Container, {
                [Stylesheet['show']] : this.props.active
            }
        )
        let PopUpStyle = Classnames(
            Stylesheet.PopUp, {
                [Stylesheet[this.props.theme]] : true
            }
        )
        let TitleStyle = {
            font: 'small',
            align: 'center'
        }
        let DiscriptionStyle = {
            font: 'medium',
            align: 'center'
        }
        // Get popup data from session storage
        let data = sessionStorage.getItem('popupData');
        //render popup base skeleton
        if (data === null) {
            return (
                <div className={ContainerStyle}>
                    <div className={PopUpStyle}>
                    </div>
                </div>
            )
        }
        data = JSON.parse(data);
        return (
            <div className={ContainerStyle}>
                <div className={PopUpStyle}>
                    <div className={Stylesheet.ClosePopUp}>
                        <button className={Stylesheet.Close} onClick={this.closePopUp}>
                            {ico_times}
                        </button>
                    </div>
                    <div className={Stylesheet.Cover}>
                        <img src={data.cover} alt="Popup Cover"/>
                    </div>
                    <div className={Stylesheet.Details}>
                        <Title font={this.props.font} 
                            theme={this.props.theme} style={
                                data?.style?.title !== undefined ?
                                data.style.title : TitleStyle}>
                            {data.title}
                        </Title>
                        <Discription font={this.props.font}
                            theme={this.props.theme} style={
                                data?.style?.discription !== undefined ?
                                data.style.discription : DiscriptionStyle}>
                            {data.discription}
                        </Discription>
                    </div>
                </div>
            </div>
            
        )
    }
    
}

export default PopUp;