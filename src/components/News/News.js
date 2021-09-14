import React from 'react';
import Stylesheet from './News.module.css';
import Classnames from 'classnames';
import Image from '../../elements/Image/Image';
import Link from '../../elements/Link/Link';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requested: false
        }

        this.onViewNewsArticle = this.onViewNewsArticle.bind(this);
    }

    onViewNewsArticle = function() {
        this.setState({requested: true});
    }

    render() {
        let NewsCardStyle = Classnames(
            Stylesheet.News, {
                [Stylesheet[this.props.theme]] : true
            }
        )
        return(
            <div className={NewsCardStyle}>
                <div className={Stylesheet.Cover}>
                    <Image 
                    src={this.props.cover}
                    url='relative'
                    alt={this.props.title}/>
                </div>
                {this.props.children}
                <Link url={'/news/'+this.props.id} font={this.props.font}
                    theme={this.props.theme} type='react-router-link'>
                    learn more
                </Link>
            </div>
        )
    }
}

export default News;