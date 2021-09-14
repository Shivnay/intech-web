/**
 * @summary Articles Service Module for the Insight Servie Module
 */
import * as firebase from 'firebase/app';
import 'firebase/firestore';

class Article {
    /**
     * Fetch Article from an Specified article directory
     * @async
     * @param {String} directory Article Diractory to fetch article from
     * @param {Array} condition Article Condtion
     * @param {Function} onArticleUpdate Method Envoked when an article update event is triggered
     * @returns {Promise} 
     */
    static get = async function(directory, condition = null, onArticleUpdate = null) {
        // Get Article Directory refference
        let articleDirectory = firebase.firestore().collection(directory);
        let query = articleDirectory;
        // Attach onChange event method if provided
        if (typeof onArticleUpdate === 'function') {
            articleDirectory.onSnapshot(function(changes) { 
                onArticleUpdate(changes) 
            })
        }
        // assign condition if provided
        if (condition !== null) 
            query = articleDirectory.where(condition);
        
        // Get Requested Articles
        return await query.get()
            .then((querySnapShot) => {
                if (!querySnapShot.empty) 
                    return Promise.resolve(querySnapShot);
                return Promise.reject(null);
            })
            .catch(error => { return Promise.reject(undefined) })
    }
}

export default Article;