import * as firebase from 'firebase';
import 'firebase/firestore';
/**
 * Cloud database services with i
 */
class Database {


    /**
     * Get database collection
     * @param {String} id - collection id
     * @returns {firebase.firestore.CollectionReference}
     */
    static collection = function(collectionRefference) {
        // perform insight analatics logging
        // check if requested id is available in
        // cache, return cached collection, fetch
        // collection otherwise, store collection in
        // cache for future requests and set change observers
        // to async updates
        return firebase.firestore().collection(collectionRefference)
    }

    
}

export default Database;