import React from 'react'
import Stylesheet from './Author.module.css'
import Discription from '../../elements/Discription/Discription'

function Author(props) {
    return (
        <div className={Stylesheet.Author}>
            <div className={Stylesheet.Profile}>
                <img src={this.props.profile} alt="Author Profile"/>
            </div>
            <div className={Stylesheet['Author-Details']}>
                {props.children}
            </div>
        </div>
    )
}

export default Author;