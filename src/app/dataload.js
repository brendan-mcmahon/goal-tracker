const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCxt4abZN7XBwX8X71v34ZxnnKnAJnFZOY',
    authDomain: 'goal-tracker-ed428.firebaseapp.com',
    projectId: 'goal-tracker-ed428',

  });

var db = firebase.firestore();

var goals =
    [
        {
            id: 1,
            current: 5,
            dueDate: '2019-06-01T04:00:00.000Z',
            name: 'Goal 1',
            target: 10
        },
        {
            id: 2,
            current: 3,
            dueDate: '2019-06-01T04:00:00.000Z',
            name: 'Goal 2',
            target: 28
        },
        {
            id: 3,
            current: 18,
            dueDate: '2020-02-01T05:00:00.000Z',
            name: 'Goal 3',
            target: 99
        },
        {
            id: 4,
            current: 25,
            dueDate: '2020-02-01T05:00:00.000Z',
            name: 'Goal 4',
            target: 25
        },
        {
            id: 5,
            current: 12,
            dueDate: '2020-02-01T05:00:00.000Z',
            name: 'Goal 5',
            target: 10
        }
    ];

goals.forEach(function(obj) {
    db.collection("goals").add({
        id: obj.id,
        name: obj.name,
        target: obj.target,
        current: obj.current,
        dueDate: obj.dueDate
    }).then(function(docRef) {
        console.log("Document written with Id: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
