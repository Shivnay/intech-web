/**
 * @summary Cloud Storage Service for Insight Platform
 */
import * as firebase from 'firebase/app'
import 'firebase/storage'

/**
 * @summary Insight Storage Service
 */
class Storage {
    constructor() {
        // Set storage bucket refference for app
        this.storageError = this.storageError.bind(this);
    }
    /**
     * Download file from Insight Cloud Storage Service
     * @async
     * @param {String} filePath Full path of file to download
     * @returns {Promise} 
     */
    static getDownloadURL = async function (filePath) {
        return await firebase.storage().ref(filePath)
            .getDownloadURL()
            .then((fileDownloadURL) => {
                // Peform insight analytics logging
                // .....
                return Promise.resolve(fileDownloadURL);
            })
            .catch(function(error) { return Promise.reject(Storage.generateError(error)) } );
    }
    
    /**
     * Classify Storage errors and generate appropriate reponses
     * Note: In case of some errors the Insight admin is notified.
     * @private
     * @param {JSON} error Server Error Details
     * @returns {JSON} App Standard Error
     * 
     */
    static generateError = function(error) {
        switch (error.code) {
            case 'storage/unknown':
              // Unknown error occurred, inspect the server response
              break;
            case 'storage/object-not-found':
              // File doesn't exist
              break;
            case 'storage/storage/bucket-not-found':
            // No bucket is configured for Cloud Storage
            break;
            case 'storage/project-not-found':
                // No project is configured for Cloud Storage
                break;
            case 'storage/quota-exceeded':
                // Quota on your Cloud Storage bucket has been exceeded. 
                // If you're on the free tier, upgrade to a paid plan. If you're 
                // on a paid plan, reach out to Firebase support.
                break;
            case 'storage/unauthenticated':
              // User doesn't have permission to access the object
              break;
            case 'storage/unauthorized':
                // User is unauthenticated, please authenticate and try again.
                break;
            case 'storage/retry-limit-exceeded':
                // The maximum time limit on an operation (upload, download, delete, etc.) has been 
                // excceded. Try uploading again.
                break;
            case 'storage/invalid-checksum':
                // File on the client does not match the checksum of the file received by the server. 
                // Try uploading again.
                break;
            case 'storage/canceled':
                // User canceled the operation.
                break;
            case 'storage/invalid-event-name':
                // Invalid event name provided. Must be one of [`running`, `progress`, `pause`]
                break;
            case 'storage/invalid-url':
              // User canceled the upload
              break;
            case 'storage/invalid-argument':
                // Invalid URL provided to refFromURL(). Must be of the form: gs://bucket/object or 
                // https://firebasestorage.googleapis.com/v0/b/bucket/o/object?token=<TOKEN>
                break;
            case 'storage/no-default-bucket':
                // User canceled the upload
                break;
            case 'storage/cannot-slice-blob':
                // User canceled the upload
                break;
            case 'storage/server-file-wrong-size':
                // User canceled the upload
                break;
            default:
                break;
          }
    }
}

export default Storage;