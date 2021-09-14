import * as firebase from "firebase/app";
import "firebase/analytics";
import 'firebase/firestore';
import 'firebase/functions';
// ----------------------------------------------------------
// INSIGHT SERVICE MODULES
// ----------------------------------------------------------
import Newsletter from './lib/newsletter';
import Articles from './lib/article';
import Analytics from './lib/analytics';
import Dynamic from './lib/dynamic';
import Messaging from './lib/messaging';
import Notification from './lib/notification';
import Storage from './lib/storage';
import Auth from './lib/oAuth';
import Database from './lib/database';
// -----------------------------------------------------------
// APP FIREBASE CONFIGURATION
// -----------------------------------------------------------
var firebaseConfig = {
  apiKey: "AIzaSyDXKi3ONCGkD3maVK5FU_-lOEevU8Ma5QA",
  authDomain: "intechfiji.firebaseapp.com",
  databaseURL: "https://intechfiji.firebaseio.com",
  projectId: "intechfiji",
  storageBucket: "intechfiji.appspot.com",
  messagingSenderId: "1019819395854",
  appId: "1:1019819395854:web:4a05546fb13e57a2a5a55f",
  measurementId: "G-BRLB519CLM"
};
// Initialize Firebase if not already initilized
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.functions();
// initilize firebase core services
export function init() {
    // notify insight service for analytics
    console.log("insight service initilized");
}

export {Newsletter}
export {Notification}
export {Messaging}
export {Articles}
export {Analytics}
export {Dynamic}
export {Storage}
export {Auth}
export {Database}