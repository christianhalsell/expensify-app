import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCVJLHRZdKvVD_-VK47iz8uafep7-TeEs0",
  authDomain: "expensify-374be.firebaseapp.com",
  databaseURL: "https://expensify-374be.firebaseio.com",
  projectId: "expensify-374be",
  storageBucket: "expensify-374be.appspot.com",
  messagingSenderId: "757598695640"
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 9878979874
});








// database.ref('notes/-LNlUQhcL2KIWu3QYy2g').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//   notes: {
//     lkjlkjlj: {
//       title: 'First note',
//       body: 'this is my note'
//     },
//     sdlfkjdslfjdslksfj: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note'
// },{
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);
// database.ref('notes/12');

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log('Error fetching data',err);
//   });

// database.ref().set({
//   name: 'Christian Halsell',
//   age: 42,
//   stressLevel: 6,
//   job: {
//     title: 'software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Laguna Niguel',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved.');
// }).catch((error) => {
//   console.log('This failed.',error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch((err) => {
//     console.error('Something went wrong',err);
//   });
