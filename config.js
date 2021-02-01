import * as firebase from 'firebase'
require('firebase/firestore')

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyA4z3cN1FvPMmr0wOko6gFNTZdAVXsxg3c",
      authDomain: "story-hub-4e42f.firebaseapp.com",
      databaseURL: "https://story-hub-4e42f-default-rtdb.firebaseio.com",
      projectId: "story-hub-4e42f",
      storageBucket: "story-hub-4e42f.appspot.com",
      messagingSenderId: "606422467117",
      appId: "1:606422467117:web:1714343d0efc5a22506ea4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();