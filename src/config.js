import firebase from 'firebase'

const config = firebase.initializeApp( {
    apiKey: "AIzaSyAMT0HXmXCUs3RGNDep3q6dS3wUaR5iGtE",
    authDomain: "loja-b869f.firebaseapp.com",
    databaseURL: "https://loja-b869f.firebaseio.com",
    projectId: "loja-b869f",
    storageBucket: "loja-b869f.appspot.com",
    messagingSenderId: "818978159217"
  })
  export const db= config.database()
 