import React from 'react';
import Classnames from 'classnames';
import Stylesheet from './Button.module.css';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.classifyFont = this.classifyFont.bind(this);
        this.classifyAnimation = this.classifyAnimation.bind(this);
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
    classifyAnimation() {
        let customeAnimation = this.props?.style?.animation;
        let globalFont = 'default-animation';
        if (customeAnimation !== undefined) {
            if (customeAnimation === 'none')
                return 'no-animation';
        }
        return globalFont;
    }

    render() {
        let ButtonStyles = Classnames(
            Stylesheet.Button, {
                [Stylesheet[this.props.style.theme]] : true,
                [Stylesheet[this.classifyFont()]] : true,
                [Stylesheet[this.classifyAnimation()]]: true
            }
        )
        if (this.props.style?.link !== undefined) {
            return(
                <button className={ButtonStyles}>
                    <a href={this.props.style.link}>{this.props.children}</a>
                </button>
            )
        }
        return(
            <button className={ButtonStyles}
                onClick={this.props.onClick}>{this.props.children}
            </button>
        )
    }
}

export default Button;