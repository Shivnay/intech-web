import React, { Suspense, lazy} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import * as Insight from '../../insight/index'
import Stylesheet from './App.module.css';
import Classnames from 'classnames';
// Default App Page
import Home from '../../Pages/Home/Home';
// Cross Site components
import Header from '../../components/Header/Header';
import Footer from '../Footer/Footer';
import Menu from '../../components/Menu/Menu';
import Toolbar from '../../components/Toolbar/Toolbar'
import PopUp from '../../components/PopUp/PopUp';
import Spinner from '../../components/Spinner/Bar/Bar';
// Dynamic App Pages
const DigitalMedia = lazy(() => import('../../Pages/DigitalMedia/DigitalMedia'));
const Marketing = lazy(() => import('../../Pages/Marketing/Marketing'));
const Development = lazy(() => import('../../Pages/Development/Development'));
const Careers = lazy(() => import('../../Pages/Careers/Careers'));
const Projects = lazy(() => import('../../Pages/Projects/Projects'));
const Blog = lazy(() => import('../../Pages/Blog/Blog'));
const Publication = lazy(() => import('../../Pages/Publications/Publications'));
const PageNotFound = lazy(() => import('../../Pages/PageNotFound/PageNotFound'));
const News = lazy(() => import('../../Pages/News/News'));


class App extends React.Component {
  constructor(props) {
    super(props);
    //global app states
    this.state = {
      AppTheme: 'light',
      Font: 'small',
      FocusedSector: 'landing-page',
      ToolbarActive: window.innerWidth < 1080 ? false : true,
      PopUpActive: false
    }
    //attributes
    this.lastScrollTop = 0;
    
    this.ToggleAppTheme = this.ToggleAppTheme.bind(this);
    this.setFocusPotition = this.setFocusPotition.bind(this);
    //this.onAppScroll = this.onAppScroll.bind(this);
    this.onAppResize = this.onAppResize.bind(this);
    this.onToolbarToggle = this.onToolbarToggle.bind(this);
    this.onPopUpShow = this.onPopUpShow.bind(this);
    this.onPopUpClose = this.onPopUpClose.bind(this);
    //global app events
    window.onresize = this.onAppResize;
    //initilize insight service
    Insight.init();
  }
  //Theme Toggle
  ToggleAppTheme = function() {
    if (this.state.AppTheme === 'light')
        this.setState({AppTheme: 'dark'});
    else 
        this.setState({AppTheme: 'light'});
  }
  setFocusPotition = function(PagePosition) {
    // if (PagePosition < 200 && this.state.FocusedSector !== 'landing-page')
    //   this.setState({FocusedSector: 'landing-page'})
    // if ((PagePosition > 200 && PagePosition < 1200) && 
    //   this.state.FocusedSector !== 'About')
    //     this.setState({FocusedSector: 'About'})
    // if ((PagePosition > 1200 && PagePosition < 2500) && 
    //   this.state.FocusedSector !== 'Digital-Media')
    //     this.setState({FocusedSector: 'Digital-Media'})
    // if ((PagePosition > 2500 && PagePosition < 3600) && 
    //     this.state.FocusedSector !== 'Marketing')
    //       this.setState({FocusedSector: 'Marketing'})
    // if (PagePosition > 3600 && this.state.FocusedSector !== 'Development')
    //   this.setState({FocusedSector: 'Development'})
    return 'null';
  }
  onAppResize = function() {
    if (window.innerWidth < 1080 && this.state.ToolbarActive)
      this.setState({ToolbarActive: false})
    if (window.innerWidth > 1080 && !this.state.ToolbarActive)
      this.setState({ToolbarActive: true})
  }
  onToolbarToggle = function() { 
    this.setState({ToolbarActive: this.state.ToolbarActive ? false : true}) 
  }
  onPopUpShow = function() { 
    // show popup
    this.setState({PopUpActive: true});
    //close popup automaticlly after 6 seconds
    let popupAutoCloseTimer = setTimeout(() => {
      if (this.state.PopUpActive) 
        this.onPopUpClose();
      clearTimeout(popupAutoCloseTimer);
    }, 6000);
  }
  onPopUpClose = function() { this.setState({PopUpActive: false}) }
  // App intilizer

  render() {

    let AppStyle = Classnames(
      Stylesheet.App, {
        [Stylesheet[this.state.AppTheme]] : true
      }
    )
    return (
      <div className={AppStyle}>
        <Router>
          {/** Cross-Site Components */}
          <Header theme={this.state.AppTheme} HeaderActive={this.state.HeaderActive}
            toggleToolbar={this.onToolbarToggle} font={this.state.font}/>
          <Menu font={this.state.font} theme={this.state.AppTheme} />
          <Toolbar theme={this.state.AppTheme} onThemeChange={this.ToggleAppTheme}
            active={this.state.ToolbarActive} />
          <PopUp font={this.state.font} theme={this.state.AppTheme}
            active={this.state.PopUpActive} close={this.onPopUpClose}/>
          <Suspense fallback={ <Spinner />}>
            <Switch>
              <Route exact path='/'>
                <Home theme={this.state.AppTheme} font={this.state.Font}
                  sector={this.state.FocusedSector} onModalShow={this.onModalShow}/>
              </Route>
              <Route exact path='/digital-media'>
                <DigitalMedia theme={this.state.AppTheme} font={this.state.Font}/>
              </Route>
              <Route exact path='/marketing'>
                <Marketing theme={this.state.AppTheme} font={this.state.Font}/>
              </Route>
              <Route exact path='/development'>
                <Development theme={this.state.AppTheme} font={this.state.Font}/>
              </Route>
              <Route path={['/careers','/careers/:id']}>
                <Careers theme={this.state.AppTheme} font={this.state.Font}/>
              </Route>
              <Route path={['/projects/:id', '/projects']}>
                <Projects theme={this.state.AppTheme} font={this.state.Font}/>
              </Route>
              <Route path={['/blog/:id', '/blog']}>
                <Blog theme={this.state.AppTheme} font={this.state.Font}/>
              </Route>
              <Route path={['/publications/:id','/publications']}>
                <Publication theme={this.state.AppTheme} font={this.state.Font}/>
              </Route>
              <Route path='/news/:id'>
                <News theme={this.state.AppTheme} font={this.state.Font}/>
              </Route>
              <Route>
                <PageNotFound theme={this.state.AppTheme} font={this.state.Font}/>
              </Route>
            </Switch>
          </Suspense>
          <Footer theme={this.state.AppTheme} font={this.state.Font} popup={this.onPopUpShow}/>
        </Router>
      </div>
    )
  }
}

export default App;
