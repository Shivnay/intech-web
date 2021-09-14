/**
 * @summary Authtication Service Module for Insight Service Module
 */
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

class TimeStamp {
    /**
     * Creates a new timestamp from the given date.
     * @method
     * @param {Date} date - The date to initialize the Timestamp from.
     * @returns A new Timestamp representing the same point in time as the given date.
     */
    static fromDate = function(date) 
        {return firebase.firestore.Timestamp.fromDate(date)}

}

export {TimeStamp}