import React from 'react'
import {Link} from 'react-router-dom';
import StyleSheet from './Header.module.css'
import classNames from 'classnames'
import logo_dark from '../../assets/logo-dark.png'
import logo_light from '../../assets/logo-light.png'
import { ico_bars, ico_toolbox, ico_times } from "../../icon";
import Menu from '../../components/Menu/Menu';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: true,
            menuActive: false,
            SearchInputActive: false
        }
        //header event handlers
        this.searchClick = this.searchClick.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleToolbar = this.toggleToolbar.bind(this);
    }
    //event when menu is toggled on mobile or tablet view
    toggleMenu() {
        this.setState({menuActive: this.state.menuActive ? false : true})
    }
    //event when toolbar is toggled on mobile or tablet view
    toggleToolbar() {this.props.toggleToolbar()}
    searchClick() {
        //code to handle app search
        if (this.state.SearchInputActive) {
            //Search query
            //hide search input
            this.setState({SearchInputActive: false})
        } else {
            //show search input
            this.setState({SearchInputActive: true})
        }
    }

    render() {
        // let searchInputStyle = classNames(
        //     StyleSheet['App-search'], {
        //         [StyleSheet['App-search-show']]: this.state.SearchInputActive,
        //         [StyleSheet['App-search-hide']]: !this.state.SearchInputActive
        //     }
        // )
        let appLogo = () => {
            if (this.props.theme === 'light' && !this.state.menuActive)
                return logo_dark;
            else if (this.props.theme === 'dark' || this.state.menuActive)
                return logo_light;
        }
        return (
            <React.Fragment>
                {/* app menu*/}
                <Menu show={this.state.menuActive} 
                    onClose={this.toggleMenu} theme={this.props.theme}
                    font={this.props.font}/>
                <header id='header' className={classNames(
                        StyleSheet.header, {
                            [StyleSheet['header-show']] : this.state.active,
                            [StyleSheet['header-hide']] : !this.state.active,
                            [StyleSheet['light']] : 
                                this.props.theme === 'light' ? true : false,
                            [StyleSheet['dark']] : 
                                this.props.theme === 'dark' ? true : false,
                            [StyleSheet['on-menu-active']] : this.state.menuActive
                        }
                    )}>
                    <nav>
                        <button onClick={this.toggleMenu} 
                            className={StyleSheet.menu}>
                                {this.state.menuActive ? ico_times : ico_bars}</button>
                        <div className={StyleSheet['App-logo']}>
                            <Link to='/'>
                                <img src = {appLogo()} alt="intech logo"/>
                            </Link>
                        </div>
                        <ul>
                            <li>{<Link to='/digital-media'>Digital Media</Link>}</li>
                            <li>{<Link to='/marketing'>Marketing</Link>}</li>
                            <li>{<Link to='/development'>Development</Link>}</li>
                            <li>{<Link to='/careers'>careers</Link>}</li>
                            <li>{<Link to='/projects'>projects</Link>}</li>
                        </ul>
                        {/* <div className={StyleSheet['App-search']}>
                            <input 
                                className={searchInputStyle} 
                                type="text" 
                                placeholder="search intec" />
                            <button onClick={this.searchClick}>{ico_search}</button>
                        </div> */}
                        <button onClick={this.toggleToolbar} 
                            className={StyleSheet.Toolbar}>{ico_toolbox}</button>
                    </nav>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;