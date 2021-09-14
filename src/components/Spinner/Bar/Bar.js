import React from 'react';
import Stylesheet from './Bar.module.css';
import Classnames from 'classnames';

class Spinner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: this.props.type,
            overrideCompletion: false
        }
    }
    // clear hanging loading
    componentWillUnmount = function() { this.setState({overrideCompletion: true}) }
    render() {
        let barStyle = Classnames(
            Stylesheet.Container, {
                [Stylesheet['pageLoadingBar']] : this.props.type === 'page'
            }
        )
        if (this.props?.type !== undefined 
            && this.props.type === 'completion') {
                // get completion percentage
                // if the component is about to be
                // unmounted the completion will 
                // complete automatically
                let completion = this.state.overrideCompletion 
                    ? '100%' : this.props.complete+"%";
                // render bar loader with parent
                // provided completion percentage
                return (
                    <div className={barStyle}>
                        <div style={{width: completion}}
                            className={Stylesheet['Percentage-Complete']}></div>
                    </div>
                )
            }
        // render standard continus loading bar
        return (
            <div className={barStyle}>
                <div className={Stylesheet.Continues}></div>
            </div>
        )
    }
}

export default Spinner;