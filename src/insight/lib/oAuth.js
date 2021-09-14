/**
 * @summary Authtication Service Module for Insight Service Module
 */
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

class Auth {
    constructor() {
        this.generateErrorResponse = this.generateErrorResponse.bind(this);
    }
    /**
     * Occurs when authentication state changes
     * @param {Function} AuthChangeFunction method to envoke when auth state changes
     */
    static onAuthChange = function(AppAuthChangeFunction) {
        firebase.auth().onAuthStateChanged(function(user) {
            if (!user) {
                // user logged out, clear users session data
                sessionStorage.clear();
            } else {
                // user logged in
                let uid = user.uid.toString();
                // get list of previously logined users
                // Note: this list only contains users who
                // opted in to ne remembered on current device
                let cachedUsers = localStorage.getItem('previousUsers');
                if (cachedUsers === null) {
                    // no users cached yet
                } else {
                    let previousUsers = JSON.parse();
                    // search if current user is already in list
                    if (!previousUsers.hasOwnProperty(uid)) {
                        // user logged in, cache user profile for future
                        // login. Note: user password isnt stored locally
                        let userProfile = {
                            displayName: user.displayName,
                            photoURL: user.photoURL,
                            email: user.email,
                            emailVerified: user.emailVerified
                        }
                        previousUsers[uid] = userProfile
                    }
                }
            }
            // transfer further processng to app handler
            AppAuthChangeFunction(user);
        })
    }
    /**
     * Cache user profile details on local device
     * local cache will not contain sensitive data
     */
    static cacheUserProfile = function(user) {
        // cache user on local storage, if enabled
    }
    /**
     * Gets the current authenticated user (if signhed in)
     * Note: currentUser only gets a users auth data not 
     * Custome created details, use currentUserWithData to get
     * the users custome details as well
     * @returns {JSON} if a user has successfuly loggedin
     * @returns {null} if no user has logined
     */
    static get currentUser() {
        return firebase.auth().currentUser;
    }
    /**
     * Get current logined user with custome created
     * details.
     * Note: currentUserWidthData returns the active
     * users entire profile
     * @returns {Promise} signed in users profile
     */
    static currentUserWidthData = async function() {
        let currentUser = firebase.auth().currentUser;
        if (currentUser !== null) {
            // active user
            let userProfile = {
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
                email: currentUser.email,
                emailVerified: currentUser.emailVerified,
                phoneNumber: currentUser.phoneNumber,
                customFields: null
            }
            // fetch user profile from database.
            let UID = currentUser.uid;
            // check if user profile already exists
            return await firebase.firestore().collection('users')
                .doc(UID)
                .get()
                .then(function(doc) {
                    if (doc.exists) {
                        userProfile.customFields = doc.data();
                        // return full user profile
                        return Promise.resolve(userProfile);
                    } else 
                        return Auth.generateErrorResponse({code: "auth/no-user-profile-data"});
                })
        }
        return null;
    }
    /**
     * Get previously logged in users on current device,
     * list contains user's basic profile informations.
     * @returns {JSON}
     */
    static get previouslyLoggedInUsers() {
        let previousUsers = localStorage.getItem('previousUsers');
        return JSON.parse(previousUsers);
    }
    /**
     * Sign up user with email and password
     * user is automaticly signin in
     * @param {String} email Valid Email Address
     * @param {String} password Strong Password
     */
    static createUserWithEmailAndPassword = async function(email, password) {
        // perform insight analytics logging

    }
    /**
     * Sign up user and with custome profile data,
     * after the custom profile is created the
     * user is automatically signed in
     * @param {String} email Valid Email Address
     * @param {String} password Strong Password
     * @param {JSON} customeProfileData
     */
    static createCustomUserWithEmailAndPassword = async function(customeProfileData) {
        //perform insight analytics logging
        // get cloud function callable refference
        let createUserWithProfileData = 
            firebase.functions().httpsCallable('createUserWithProfileData');
        // initiate method call
        return await createUserWithProfileData(customeProfileData);
    }
    /**
     * Sign User Out of App, This will trigger an
     * app OAuth change event
     * @param {String} email 
     * @param {String} password 
     * @returns {Promise} containes user details on successful login
     */
    static signInWithEmailAndPassword = async function(email, password) {
        // perform insight analytics loging
        return await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {return Promise.resolve('login-success')})
            .catch((error) => { return Promise.reject(Auth.generateErrorResponse(error)) })
    }
    /**
     * Check if an email is already associated with an account
     * Note: promise is resolved when email is avaiable, and 
     * rejected otherwise.
     * @async
     * @param {String} email email to check
     * @returns {Promise}
     */
    static isEmailAvailable = async function(email) {
        // to validate an email address association
        // a list of sign in methods 
        return await firebase.auth().fetchSignInMethodsForEmail(email)
            .then(function(signInMethods) {
                // check availability
                if (signInMethods.includes('password'))
                    return Promise.reject("email-unavailable");
                else 
                    return Promise.resolve('email-available');
            })
            .catch(function(error) {
                // Some error occurred, you can inspect the code: error.code
                return Promise.reject(error)
            });
    }
    /**
     * Send user email verification on there provided email,
     * Note: Email Verification only works if the user logs in
     * with email and password and not other signin methods
     * @returns {Promise} 
     */
    static sendEmailVerification = async function() {
        // perform insight logging
        // send email verification to currently signed in user
        return await firebase.auth().currentUser.sendEmailVerification()
            .then(() => { return Promise.resolve('verification-email-send') })
            .catch((error) => { return Promise.reject(Auth.generateErrorResponse(error)) })
    }
    /**
     * Sign out currently logged in user
     */
    static signOut = async function() {
        return await firebase.auth().signOut()
            .catch(function(error) {
                return Promise.reject(Auth.generateErrorResponse(error));
            })
    }
    /**
     * Generate Error prompt for specific error codes
     * @private
     * @param {JSON} error
     */
    static generateErrorResponse = function(error) {
        switch (error.code) {
            case "auth/wrong-password":
                return 'wrong-password';
            case "auth/email-already-in-use":
                return 'email-already-in-use';
            case "auth/invalid-email":
                return 'invalid-email';
            case "auth/operation-not-allowed":
                return 'operation-not-allowed';
            case "auth/weak-password":
                return 'weak-password';
            case "auth/user-disabled":
                return 'user-disabled';
            case "auth/user-not-found":
                return 'user-not-found';
            case "auth/no-user-profile-data":
                return 'no-user-profile-data';
            // case "auth/invalid-email":
            //     return 'wrong-password';
            // case "auth/invalid-email":
            //     return 'wrong-password';
            // case "auth/invalid-email":
            //     return 'wrong-password';
            // case "auth/invalid-email":
            //     return 'wrong-password';
            default:
                break;
        }
        return null;
    }
}   

export default Auth;