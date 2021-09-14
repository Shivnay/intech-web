import React from 'react'
import Stylesheet from './SocialMedia.module.css'
import Classnames from 'classnames'

class SocialMedia extends React.Component {

    constructor(props) {
        super(props);

        this.classifyFont = this.classifyFont.bind(this);
    }
    //classify font sizes 
    classifyFont() {
        let customeFont = this.props?.style?.font;
        let globalFont = this.props.font;
        if (customeFont !== undefined) {
            const FontStandards = {small:0, medium:1, large:2,'x-large':3}
            //identify custome font request
            if (FontStandards[customeFont] > FontStandards[globalFont])
                return customeFont;
        }
        return globalFont;
    }

    render() {
        let SocialMediaPlatformStyle = Classnames(
            Stylesheet['Social-Media-Platform'], {
            [Stylesheet[this.classifyFont()]] : true,
            [Stylesheet[this.props.theme]] : true
        }) 
        return(
            <div className={SocialMediaPlatformStyle}>
                <a href={this.props.account}>{this.props.icon}</a>
            </div>
        )
    }
}

export default SocialMedia;