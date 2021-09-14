import React from 'react'
import * as Insight from '../../insight/index'
import Stylesheet from './Video.module.css'
import Classnames from 'classnames'
import {ico_play, ico_pause} from '../../icon'

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            loading: true,
            menu: {
                show: false,
                x: null,
                y: null
            }
        }
        // video refference
        this.playerRef = React.createRef();
        // video state handles
        this.onTogglePlayback = this.onTogglePlayback.bind(this);
        this.onPlaybackEnded = this.onPlaybackEnded.bind(this);
        this.toggleControls = this.toggleControls.bind(this);
    }
    /**
     * Show custom video controls 
     * on right click
     */
    toggleControls = function(event) {
        event.preventDefault();
        // classify mouse key
        let key = event.button;
        // get video menu refference
        let menu = {...this.state.menu};
        // toggle control menu
        if (key === 0) {
            // hide controls menu
            if (menu.show) {
                menu.show = false;
                this.setState({menu: menu})
            } else {
                // set menu state and render location                
                menu.show = true;
                menu.x = event.clientX;
                menu.y = event.clientY;
                // set control menu location
                this.setState({menu: menu});
            }
        }
    }
    /**
     * render video player menu
     */
    renderMenu = function() {
        
    }
    /**
     * Toggle video playback
     */
    onTogglePlayback = async function() {
        // get video player refference
        let videoPlayer = this.playerRef.current;
        // check if video is download from cloud storage
        if (videoPlayer.src === '') {
            // set playback video
            if (this.props.url === 'relative') {
                // video requires download from cloud
                //show loading animation
                // .....
                // check if parent is still fethcing the video
                // url
                this.setState({loading: true})
                if (this.props.src !== '') {
                    //get media url from cloud storage
                    await Insight.Storage.getDownloadURL(this.props.src)
                    .then((fileURL) => {
                        // set media url 
                        videoPlayer.src = fileURL
                        // stop loading animation
                        // ...
                    })
                }
            } else 
                // static media
                videoPlayer.src = this.props.src
        }
        //check if media is playing
        if (videoPlayer.paused) {
            this.setState({playing: true});
            videoPlayer.play();
        } else {
            this.setState({playing: false});
            videoPlayer.pause();
        }
    }
    /**
     * Occues when video playback has ended
     */
    onPlaybackEnded = function() {this.setState({playing: false})};
    /**
     * get video poster
     */
    get poster() {return this.props.poster;}
    render() {
        let HeaderStyle = Classnames(
            Stylesheet.Header, {
                [Stylesheet[this.props?.style.theme !== undefined ? 
                                this.props.style.theme : "default"]] : true,
                                [Stylesheet[this.state.playing ? 'docked' : 'undocked']] : true
            }
        )
        return(
            <div className={Stylesheet.Video}>
                <div className={Stylesheet.Menu}></div>
                <div className={HeaderStyle}>
                    <button onClick={this.onTogglePlayback}>
                        {this.state.playing ? ico_pause : ico_play}
                    </button>
                </div>
                <video preload={this.props.preload} 
                    poster={this.props.poster} 
                    onEnded={this.onPlaybackEnded}
                    ref={this.playerRef}
                    onMouseDown={this.toggleControls}
                    src={null}>
                        <source type="video/mp4" />
                </video>
            </div>
            
        )
    }
}

export default Video;
