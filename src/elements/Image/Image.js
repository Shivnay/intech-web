import React from 'react';
import Classnames from 'classnames';
import Stylesheet from './Image.module.css';
import * as Insight from '../../insight/index';
import Spinner from '../../components/Spinner/Image/Image';
import Default from '../../assets/default.png';

class Image extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true, 
            img: Default
        }
        // element refference
        this.Image = React.createRef();
        // event handler 
        this.classifyImageURL = this.classifyImageURL.bind(this);
        this.updateImageState = this.updateImageState.bind(this);
    }
    componentWillMount = function() {
        // load image from parent
        this.classifyImageURL();
    }
    /**
     * called once required image refference
     * has been downloaded ot set
     */
    updateImageState = function(url) {
        // create image element to load required image
        let img = document.createElement('img');
        img.alt = this.props.alt;
        img.src = url;
        // wait for image to fully download
        img.onload = () => {
            // image fully download
            // show image
            this.setState({
                loading: false, 
                img: img.src
            })
        }
    }
    componentDidUpdate = function(prevProps) {
        if (this.props.src !== prevProps.src) {
            //update loading state if image was reset
            if (!this.state.loading) 
                this.setState({loading: true})
            this.classifyImageURL();
        }
            
    }
    /**
     * determins image url nature.
     * if image is a relative path, it is downloaded
     * from cloud storage bucket then rendered.
     */
    classifyImageURL = function() {
        // check if image refference is static or relative
        // relative paths require downloading image from 
        // cloud storage before loading can begin
        if (this.props.url === 'relative') {
            // get downloadable image from cloud
            // storage bucket
            Insight.Storage.getDownloadURL(this.props.src)
                .then((url) => {
                    this.updateImageState(url)
                })
        } else 
            // static image refference
            this.updateImageState(this.props.src)
    }

    render() {

        return (
            <div className={Stylesheet.Container}>
                <div className={Classnames(
                    Stylesheet.LoadingContainer, {
                        [Stylesheet['loading']] : this.state.loading
                    }
                )}>
                    <Spinner show={this.state.loading}/>
                </div>
                <img src={this.state.img} 
                    alt={this.props.alt}
                    ref={this.Image}
                    onLoad={this.imageLoaded}/>
            </div>
        )
    }
}

export default Image;