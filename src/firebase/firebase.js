import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
  const githubAuthProvider = new firebase.auth.GithubAuthProvider();


  export { 
    firebase, 
    googleAuthProvider, 
    facebookAuthProvider, 
    githubAuthProvider, 
    database as default 
  };

//   //child_removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val());
//   });

//   //child_changed
//   database.ref('expenses').on('child_changed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val());
//   });

//   //child_added
//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//   database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//           expenses.push({
//               id: childSnapshot.key,
//               ...childSnapshot.val()
//           });
//       });
//       console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//           expenses.push({
//               id: childSnapshot.key,
//               ...childSnapshot.val()
//           });   
// });
// console.log(expenses);
//  });
// const expenses = [{
//         description: 'Rent a bike',
//             note: 'some note',
//             amount: '5$',
//             createdAt: 2018-12-12  
// }, {
//     description: 'Rent a car',
//     note: 'some note',
//     amount: '500$',
//     createdAt: 2018-12-12
// }, {
//     description: 'Rent an apartment',
//             note: 'some note',
//             amount: '1000$',
//             createdAt: 2018-12-12
// }];


//database.ref('expenses').set(expenses);

//another way
//   database.ref('expenses').push({
//     description: 'Rent a bike',
//     note: 'some note',
//     amount: 500,
//     createdAt: 987654321
// });

// database.ref('expenses').push({
//     description: 'Rent a car',
//     note: 'some note',
//     amount: 45000,
//     createdAt: 987654321
// });

// database.ref('expenses').push({
//     description: 'Rent an appartment',
//     note: 'some note',
//     amount: 100000,
//     createdAt: 987654321
// });


  //database.ref('notes/-LL_74Cyj07JxkOoxaDb').remove();

//   database.ref('notes').push({
//       title: 'Course Topics',
//       body: 'React Native, Angular, Python'
//   });
  
//   const firebaseNotes = {
//     notes: {
//         apappak: {
//             title: 'First note',
//             body: 'This is my note'
//         },
//         gdgdggdgdggdg: {
//             title: 'Another note',
//             body: 'This is my note'    
//         }
//     }
//   };

//   const notes = [{
//       id: '12',
//       title: 'First note',
//       body: 'This is my note'
//   }, {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note' 
//   }];

//   database.ref('notes').set(notes);
//   database.ref('notes/12');



//   database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
//   })

//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//       console.log('Error with data fetching', e);
//   });

//   setTimeout(() => {
//       database.ref('age').set(29);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 3500);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

//   database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//   })
//   .catch((e) => {
//       console.log('Error fetching data', e);
//   });

//   database.ref().set({
//       name: 'Maryna Netrebchuk',
//       age: 28,
//       stressLevel: 6,
//       job: {
//           title: 'Software developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Denver',
//           country: 'USA'
//       }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//       console.log('This failed', e);
//   });

//   database.ref().update({
//      stressLevel: 9,
//      'job/company': 'Amazon',
//      'location/city': 'Seattle'
//   });

  
  //way to remove data
  //database.ref('isSingle').set(null);

//remove data
//   database.ref()
//   .remove()
//   .then(() => {
//    console.log('Data was removed');   
//   }).catch((e) => {
//       console.log('Did not remove data', e);
//   });