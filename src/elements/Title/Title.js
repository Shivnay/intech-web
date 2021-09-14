import React from 'react';
import Stylesheet from './Title.module.css';
import Classnames from 'classnames';

function Title(props) {
    //classify font sizes 
    let classifyFont = function() {
        let customeFont = props?.style?.font;
        let globalFont = props.font;
        if (customeFont !== undefined) {
            const FontStandards = {small:0, medium:1, large:2,'x-large':3}
            //identify custome font request
            if (FontStandards[customeFont] > FontStandards[globalFont])
                return customeFont;
        }
        return globalFont;
    }
    let classifyAlignment = function() {
        let align = props?.style?.align;
        if (align !== undefined)
            return 'align-'+align;
        return 'align-default';
    }
    let TitleStyle = Classnames(
        Stylesheet.Title, {
            [Stylesheet[classifyFont()]] : true,
            [Stylesheet[props.theme]] : true, 
            [Stylesheet[classifyAlignment()]] : true
        }
    )
    return(<h1 className={TitleStyle}>{props.children}</h1>)
}

export default Title;