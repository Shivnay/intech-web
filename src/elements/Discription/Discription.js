import React from 'react'
import Stylesheet from './Discription.module.css'
import Classnames from 'classnames'

class Discription extends React.Component {
    constructor(props) {
        super(props);
        this.classifyFont = this.classifyFont.bind(this);
        this.classifyFontStyle = this.classifyFontStyle.bind(this);
        this.classifyAlignment = this.classifyAlignment.bind(this);
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
    classifyFontStyle() {
        let style = this.props?.style?.style;
        if (style !== undefined)
            return 'style-'+style;
        return 'style-default';
    }
    classifyAlignment() {
        let align = this.props?.style?.align;
        if (align !== undefined)
            return 'align-'+align;
        return 'align-default';
    }

    render() {
        let DiscriptionStyle = Classnames(
                Stylesheet.Discription, {
                [Stylesheet[this.classifyFont()]] : true,
                [Stylesheet[this.props.theme]] : true,
                [Stylesheet[this.classifyFontStyle()]] : true,
                [Stylesheet[this.classifyAlignment()]] : true
            }
        )
        return (
            <p className={DiscriptionStyle}>{this.props.children}</p>
        )
    }
}

export default Discription;