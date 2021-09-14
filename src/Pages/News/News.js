import React, { useState } from 'react';
import {useParams, Redirect} from 'react-router';
import * as Insight from '../../insight/index';
import Stylesheet from './News.module.css';
import Classnames from 'classnames';
import Spinner from '../../components/Spinner/Standard/Standard';
import Image from '../../elements/Image/Image';
import Title from '../../elements/Title/Title';
import Discription from '../../elements/Discription/Discription';

function News(props) {
    // get news id from url
    let { id } = useParams();
    let [news, setNews] = useState(null);
    let newsNotFound = false;
    // get news data
    function newsDetails() {
        // check if news article is already in cache
        let newsCollection = sessionStorage.getItem('newsCollection');
        if (newsCollection !== null) {
            newsCollection = JSON.parse(newsCollection);
            newsCollection.forEach(article => {
                if (article.id === id) {
                    // news article is in cache
                    setNews(article);
                }
            });
        }
        // check if article was found in cache
        if (news === null) {
            let articleData = null;
            // article not found fetch from database
            Insight.Database.collection('news').doc(id)
                .get().then((article) => {
                    // fetched author details
                    return article.data().author.get().then(author => {
                        // cache article on session storage
                        articleData = article.data();
                        // concat article id
                        articleData.id = article.id;
                        // store author data
                        articleData.author = author.data();
                        // store in cache
                        newsCollection = JSON.parse(newsCollection);
                        newsCollection.push(articleData);
                        sessionStorage.setItem('newsCollection',newsCollection);
                    })
                    
                })
                .catch(error => { newsNotFound = true })
                // store for current use
                .then(_ => { setNews(articleData) })
        }
    }

    function getRenderArticle() {
        if (newsNotFound)
            return <Redirect to=''/>
        if (news === null || news.id !== id) {
            // article data not fetched
            newsDetails()
            // render loading aniamation
            return (
                <div className={Stylesheet.Loading}>
                    <Spinner />
                </div>
            )
        }
        return (
            <div className={Stylesheet.Article}>
                <div className={Stylesheet.Header}>
                    <Image 
                        src={news.cover}
                        url='relative'
                        alt={news.title}/>
                </div>
                <div className={Stylesheet.Title}>
                    <Title theme={props.theme} font={props.font}>
                        {news.title}
                    </Title>
                </div>
                <div className={Stylesheet.Author}>
                    <div className={Stylesheet.Profile}>
                        <Image 
                            src={news.author.photoURL}
                            url='relative'
                            alt={news.author.title}/>
                    </div>
                    <div className={Stylesheet['Author-Details']}>
                        <Title theme={props.theme} font={props.font}>
                            {news.author.firstName+' '+news.author.lastName}
                        </Title>
                        <Discription theme={props.theme} font={props.font}>
                            {news.author.title}
                        </Discription>
                        {/* <Discription theme={props.theme} font={props.font}>
                            {new Date(news.time_stamp.seconds).getUTCMonth}
                            &nbsp;{new Date(news.time_stamp.seconds).getUTCDate()},
                            &nbsp;{new Date(news.time_stamp.seconds).getUTCFullYear()}
                            &nbsp;&middot;&nbsp;{news.duration} minute read
                        </Discription> */}
                    </div>
                </div>
                <div className={Stylesheet.Content}>
                    <Discription theme={props.theme} font={props.font}>
                        {news.text.full}
                    </Discription>
                </div>
            </div>
        )
    }

    return (
        <div className={Classnames(
            Stylesheet.Container, {
                [Stylesheet[props.theme]] : true
            }
        )}>
            {getRenderArticle()}
        </div>
    )
}

export default News;