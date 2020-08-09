import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAfzKZ2aPlpUAOltEKeQ0s2Ie08Big1FVA",
    authDomain: "simplechatapp-bf34a.firebaseapp.com",
    databaseURL: "https://simplechatapp-bf34a.firebaseio.com",
    projectId: "simplechatapp-bf34a",
    storageBucket: "simplechatapp-bf34a.appspot.com",
    messagingSenderId: "471122717104",
    appId: "1:471122717104:web:1f82334c84f1dd9bd78e75"
};

firebase.initializeApp(config);

export default firebase;

