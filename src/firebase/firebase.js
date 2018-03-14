import * as firebase from "firebase";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBB0KB46DlLBSRU_iRvEbm_CpnPswcEeB0",
    authDomain: "auth-test-5cfd4.firebaseapp.com",
    databaseURL: "https://auth-test-5cfd4.firebaseio.com",
    projectId: "auth-test-5cfd4",
    storageBucket: "auth-test-5cfd4.appspot.com",
    messagingSenderId: "460974718501"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
