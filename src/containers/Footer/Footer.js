import React from 'react'
import * as Insight from '../../insight/index'
import Stylesheet from './Footer.module.css'
import Classnames from 'classnames'
import Title from '../../elements/Title/Title'
import News from '../../components/News/News'
import Newsletter_Cover from '../../assets/newsletter-cover.png'
import Link from '../../elements/Link/Link'
import Button from '../../elements/Button/Button'
import Discription from '../../elements/Discription/Discription'
import Brand_Dark from '../../assets/brand-light.png'
import Spinner from '../../components/Spinner/Standard/Standard';


class Footer extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            NewsletterSubscription: false,
            newsLoaded: false
        }

        this.subscribeEmail = this.subscribeEmail.bind(this);
        this.onViewNewsArticle = this.onViewNewsArticle.bind(this);
        // Start Events
        this.getNews = this.getNews.bind(this);
    }

    componentDidMount = function () {
        
    }

    async subscribeEmail(event) {
        let emailAddress = event.target.previousSibling.value;
        var emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // Clear Input Field
        event.target.previousSibling.value = '';
        // popup config
        let popup =  {
            'cover' : Newsletter_Cover,
            'title':null,
            'discription':null,
            'style' : {
                'title':{
                    font: 'small',
                    align: 'center'
                },
                'discription': {
                    font: 'meduium',
                    align: 'center'
                }
            }
        };
        // Validate Email Address
        if (emailAddress !== '' && emailRegx.test(emailAddress)) {
            // Store email on newsletter listing
            await Insight.Newsletter.Subscribe(emailAddress)
            .then(() => {
                this.setState({NewsletterSubscription: true});
                // show subscription confirmation
                popup.title = 'subscription confirmed!';
                popup.discription = 'your email has been added to our newsletter listing, keep an eye out for updates from us. 😊';
            })
            .catch((error) => {
                popup.title = error;
                popup.discription = 'the email address provided is already in our newsletter listing.';
            })
        } else {
            popup.title = 'oops!, are you sure thats the one?';
            popup.discription = 'the email address entered is invalid, please enter a valid email address and try again.';
        }
        // store popup config in session storage
        sessionStorage.setItem('popupData', JSON.stringify(popup));
        //show success popup
        this.props.popup();
    }
    async getNews() {
        // check if articles hae already been loaded
        let collection = JSON.parse(sessionStorage.getItem('newsCollection'));
        if (collection !== null) {
            this.setState({newsLoaded: true});
            return;
        }
        //fetch recent news recods from database
        Insight.Database.collection('news').orderBy('time_stamp','desc')
            .limit(3).get()
            .then((querySnapshot) => {
                // news collection
                let newsCollection = []
                // news article counter
                querySnapshot.forEach((news) => {
                    let articleID = news.id;
                    let newsArticle = news.data();
                    // fetch author details
                    news.data().author.get()
                        .then((authorDetails) => {
                            // generate full news article details                            
                            // encapsulate author details
                            newsArticle.author = authorDetails.data();
                            // encapsulate article id
                            newsArticle.id = articleID;
                            // store in collection
                            newsCollection.push(newsArticle);
                            // store on session storage
                            //store retreved data on session storage
                            sessionStorage.setItem('newsCollection', JSON.stringify(newsCollection));
                            if (newsCollection.length === 3)
                                this.setState({newsLoaded: true})
                        })
                })
            })
    }
    onViewNewsArticle(news_id) {
        //configure modal for requested aricle
        sessionStorage.setItem('modalData', sessionStorage.getItem(news_id));
        //show article
        this.props.modal();
    }
    /**
     * render recent news articles
     * @returns {JSX}
     */
    get topNewsArticles() {
        let topArticles = []
        // get cached news articles
        let newsCollection = sessionStorage.getItem('newsCollection');
        // check if top articles have been loaded
        if (newsCollection === null) 
            // get news articles
            this.getNews();
        else {
            // get iteratable list
            newsCollection = JSON.parse(newsCollection);
            newsCollection.map((article, index) => (
                topArticles.push(
                    <News font={this.props.font} theme={this.props.theme} 
                    cover={article.cover} id={article.id} title={article.title}
                    key={index}>
                        <Title font={this.props.font} theme={this.props.theme}>
                            {article.title}
                        </Title>
                        <Discription font={this.props.font} theme={this.props.theme}>
                            {article.text.short}
                        </Discription>
                    </News>
                )
            ))
            // return news collection
            return topArticles;
        }
        // articles loading show spinner
        return <div className={Stylesheet.Spinner}>
                <Spinner theme={this.props.theme} />
            </div>
    }

    render() {
        let footerStyle = {
            'title' : {align: 'center'},
            'link' : {decoration: false},
            'button' : {
                font: 'medium',
                animation: 'none'
            },
            'discription': {

            }
        }
        
        return(
            <div className={Classnames(
                    Stylesheet.Container, {
                        [Stylesheet[this.props.theme]]: true
                    }
                )}>
                <div className={Stylesheet.News}>
                    <Title font={this.props.font} style={{font: 'medium', 'align': 'center'}}
                        theme={this.props.theme}>
                        news and events
                    </Title>
                    <div className={Stylesheet.Row}>
                        {this.topNewsArticles}
                    </div>
                </div>
                <footer>
                    <div className={Stylesheet.Options}>
                        <div className={Stylesheet['Quick-links']}>
                            <div className={Stylesheet['Company-Social-Media']}>
                                <Title text='keep in touch' font='small'
                                    theme='dark' style={footerStyle.title}/>
                                    <ul>
                                        <li>
                                            <Link url='https://www.facebook.com/intecfiji/'
                                                font='small' theme='dark' style={footerStyle.link}>
                                                Facebook
                                            </Link>
                                        </li>
                                        <li>
                                            <Link url='https://www.twitter.com/'
                                                font='small' theme='dark' style={footerStyle.link}>
                                                    Twitter
                                                </Link>
                                        </li>
                                        <li>
                                            <Link url='https://www.linkedin.com/'
                                                font='small' theme='dark' style={footerStyle.link}>
                                                LinkedIn
                                            </Link>
                                        </li>
                                        <li>
                                            <Link url='https://instagram.com/intecfiji/'
                                                font='small' theme='dark' style={footerStyle.link}>
                                                Instagram
                                            </Link>
                                        </li>
                                    </ul>
                            </div>
                            <div className={Stylesheet['Extra-Links']}>
                                <Title font='small' theme='dark' style={{align: 'center'}}>
                                    more stuff
                                </Title>
                                <ul>
                                    <li>
                                        <Link url='#' font='small' theme='dark' 
                                            style={footerStyle.link}>
                                            Insight
                                        </Link>
                                    </li>
                                    <li>
                                        <Link type='react-router-link' url='/publications' 
                                            font='small' theme='dark' style={footerStyle.link}>
                                            Publications
                                        </Link>
                                    </li>
                                    <li>
                                        <Link url='/blog' type='react-router-link'
                                            font='small' theme='dark' style={footerStyle.link}>
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={Stylesheet.Newsletter}>
                            <Title font={this.props.font} theme='dark' style={footerStyle.title}>
                                subscribe to our newsletter
                            </Title>
                            <div className={Stylesheet.Email}>
                                <fieldset>
                                    <input type="email" placeholder='your email' required/>
                                    <Button font={this.props.font} theme='dark' 
                                        style={footerStyle.button} onClick={this.subscribeEmail}>
                                        subscribe
                                    </Button>
                                </fieldset>
                                <Discription font={this.props.font} theme='dark' 
                                    style={footerStyle.discription}>
                                    your email will not be shared with anyone
                                </Discription>
                            </div>
                        </div>
                    </div>
                    <div className={Stylesheet.licence}>
                        <img src={Brand_Dark} alt="intec Brand"/>
                        <ul>
                            <li>
                                <Link font='medium' theme='dark'
                                    url='/terms-of-service' type='react-router-link' style={footerStyle.link}>
                                    terms | 
                                </Link>
                            </li>
                            <li>
                                <Link font='medium' theme='dark'
                                    url='/privacy-policy' type='react-router-link' style={footerStyle.link}>
                                    privacy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;