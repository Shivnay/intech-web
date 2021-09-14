/**
 * @summary Newsletter Service Module for the Insight Platform
 */
import * as firebase from 'firebase/app'
import 'firebase/firestore'

class Newsletter {
    constructor() {
        this.rememberSubscription = this.rememberSubscription.bind(this);
    }
    /** 
     * Subscribe email to app newsletter listing.
     * @async
     * @param {String} email Email address to add to subscription listing.
     * @returns {Promise}    Operation Promise
    */
    static Subscribe = async function(email) {
        // Get Newsletter Collection refference
        let newsletterCollection = firebase.firestore().collection("newsletter");
        // Get entire email listing
        return await newsletterCollection.where("email", '==', email)
            .get() 
            .then((querySnapShot) => {
                if (querySnapShot.empty) {
                    newsletterCollection.add({
                        email : email,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    })
                    .then(() => { return Promise.resolve() })
                    .catch((error) => { return Promise.reject("Nework Error")})
                    // cache subscription
                    this.rememberSubscription(email);
                }
                else 
                    return Promise.reject("email already subscribed");
            })
            .catch((error)=>{ return Promise.reject("email already subscribed") })
    }
    /**
     * Cache newsletter subscription on local device to prevent repeated subscription attempts
     * @private
     * @param email Subcribed email address
     */
    static rememberSubscription = function(email) {
        // extract stored email addresses from local storage
        // convert to propriaty JSON
        // append subscribed email listing
    }
}

export default Newsletter;