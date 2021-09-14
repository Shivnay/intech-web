import React, { useState } from 'react';
import StyleSheet from './Menu.module.css';
import {Link, Redirect} from 'react-router-dom';
import classNames from 'classnames';
import Modal from '../../components/Modal/Modal';
import { ico_paint_brush, ico_ad, ico_code, ico_user_tie, ico_folder, ico_font, ico_magic, ico_camera_retro, ico_thumbs_up, ico_at, ico_search, ico_android, ico_apple, ico_react, ico_linux, ico_blog, ico_newspaper } from '../../icon';

function Menu(props) {
    // menu state
    let menuListRef = React.createRef();
    let menuRef = React.createRef();
    const [redirect, setRedirect] = useState(null);
    //element state checkers
    let MenuStyle = classNames(
        StyleSheet.Menu, {
            [StyleSheet['light']] : props.theme === 'light' ? true : false,
            [StyleSheet['dark']] : props.theme === 'dark' ? true : false
        }
    )
    // let searchInputStyle = classNames(
    //     StyleSheet['App-search'], {
    //         [StyleSheet['App-search-show']]: this.state.SearchInputActive,
    //         [StyleSheet['App-search-hide']]: !this.state.SearchInputActive
    //     }
    // )
    let gotoPage = function(url) {
        // user requested navigation to page
        // close modal navigation after animations end
        let closeDelay = setTimeout(() => {
            // clear timeout
            clearTimeout(closeDelay);
            props.onClose();
        }, 400);
        // set window scroll position
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // redirect to requested url
        setRedirect( <Redirect to={url} /> )
    }
    let onMenuItemFocus = function(event) {
        // get current scoll position
        let position = menuListRef.current.scrollLeft;
        // identify and set styping
        // #3f51b5
        if (position < 160)
            menuRef.current.style.backgroundColor = '#973874';
        else if (position > 160 && position < 400)
            menuRef.current.style.backgroundColor = '#673ab7';
        else if (position > 400 && position < 630)
            menuRef.current.style.backgroundColor = '#3f51b5';
        else if (position > 630 && position < 1000)
            menuRef.current.style.backgroundColor = '#000949';
        else 
            menuRef.current.style.backgroundColor = '#ee5253'
    }
    return (
        <Modal show={props.show} onClose={props.onClose}>
            {redirect}
            <menu className={MenuStyle} ref={menuRef}>
                <h1>hello, welcome to intec.</h1>
                <h5>select your destination.</h5>
                <nav>
                    <ul onScroll={onMenuItemFocus} ref={menuListRef}>
                        <li>
                            <div className={StyleSheet.Item} 
                                onClick={_=> gotoPage('/digital-media')}>
                                <h1>{ico_paint_brush}</h1>
                                {<Link to='/digital-media'>Digital Media</Link>}
                                <h5>get your brand to shine bright</h5>
                                <ul>
                                    <li><h4>{ico_paint_brush}</h4></li>
                                    <li><h4>{ico_font}</h4></li>
                                    <li><h4>{ico_magic}</h4></li>
                                    <li><h4>{ico_camera_retro}</h4></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={StyleSheet.Item} 
                                onClick={_=> gotoPage('/marketing')}>
                                <h1>{ico_ad}</h1>
                                {<Link to='/marketing'>Marketing</Link>}
                                <h5>lets get you out there</h5>
                                <ul>
                                    <li><h4>{ico_thumbs_up}</h4></li>
                                    <li><h4>{ico_ad}</h4></li>
                                    <li><h4>{ico_at}</h4></li>
                                    <li><h4>{ico_search}</h4></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={StyleSheet.Item}
                                onClick={_=> gotoPage('/development')}>
                                <h1>{ico_code}</h1>
                                {<Link to='/development'>Development</Link>}
                                <h5>an app for every platform</h5>
                                <ul>
                                    <li><h4>{ico_android}</h4></li>
                                    <li><h4>{ico_apple}</h4></li>
                                    <li><h4>{ico_react}</h4></li>
                                    <li><h4>{ico_code}</h4></li>
                                    <li><h4>{ico_linux}</h4></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={StyleSheet.Item}
                                onClick={_=> gotoPage('/careers')}>
                                <h1>{ico_user_tie}</h1>
                                {<Link to='/careers'>careers</Link>}
                                <h5>join our dynamic team</h5>
                            </div>
                        </li>
                        <li>
                            <div className={StyleSheet.Item}
                                onClick={_=> gotoPage('/projects')}>
                                <h1>{ico_folder}</h1>
                                {<Link to='/projects'>projects</Link>}
                                <h5>get familiar with our work</h5>
                            </div>
                        </li>
                        <li>
                            <div className={StyleSheet.Item}
                                onClick={_=> gotoPage('/blog')}>
                                <h1>{ico_blog}</h1>
                                {<Link to='/blog'>blog</Link>}
                                <h5>read through our passions and views.</h5>
                            </div>
                        </li>
                        <li>
                            <div className={StyleSheet.Item}
                                onClick={_=> gotoPage('/news')}>
                                <h1>{ico_newspaper}</h1>
                                {<Link to='/news'>news</Link>}
                                <h5>stay up to date with us.</h5>
                            </div>
                        </li>
                    </ul>
                </nav>
            </menu>
        </Modal>
    )
}

export default Menu;