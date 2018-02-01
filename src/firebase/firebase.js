import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyAcb5EUoTXWDPdmVRBmi_vReBxD7CTVHIk',
	authDomain: 'bookcollection-39648.firebaseapp.com',
	databaseURL: 'https://bookcollection-39648.firebaseio.com',
	projectId: 'bookcollection-39648',
	storageBucket: 'bookcollection-39648.appspot.com',
	messagingSenderId: '493652809189'
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };