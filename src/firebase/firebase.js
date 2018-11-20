import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCcGxmLcb1CSyoUYj61Rrk4zqFnQMWq6fo",
  authDomain: "expensify-19ee4.firebaseapp.com",
  databaseURL: "https://expensify-19ee4.firebaseio.com",
  projectId: "expensify-19ee4",
  storageBucket: "expensify-19ee4.appspot.com",
  messagingSenderId: "852781922355"
};

firebase.initializeApp(config);

const database = firebase.database()

export { firebase, database as default };



// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').push({
//   description: "rent",
//   note: "",
//   amount: 109500,
//   createdAt: 3890124691872
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses);
//   });

// database.ref('note').push({
//   title: 'Course Topics',
//   body: 'React native, angular, python'
// });


// const firebasenote = {
//   note: {
//     apoijasd: {
//       id: '12',
//       title: 'First note!'
//     },
//     dasvgdujh: {
//       id: '45',
//       title: '45 note!'
//     }
//   }
// }

// const note = [{
//   id: '12',
//   title: 'First note!'
// },{
//   id: '45',
//   title: '45 note!'
// }];

// database.ref().set(firebasenote);

// database.ref().set({
//   name: 'Jakub Chmielewski',
//   age: 21,
//   isSingle: false,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Bitcraft'
//   },
//   location: {
//     city: 'Białystok',
//     country: 'Poland'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('This faled.', e);
// });


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   });

// setTimeout(() => {
//   database.ref().update({
//     name: 'Kuba',
//     age: 20,
//   });
// }, 3500)

// setTimeout(() => {
//   database.ref().off();
// }, 5000)

// setTimeout(() => {
//   database.ref().update({
//     name: 'Kuba',
//     age: 18,
//   });
// }, 7000)

// database.ref().set('This is my data');
// database.ref('age').set(27);
// database.ref('location/city').set('Warszawa');
// database.ref('attributes').set({ height: 178, weight: 80 }).then(() => {
//   console.log('Second set call worked.');
// }).catch((e) => {
//   console.log('Things didnt for the second error', e);
// });
// database.ref('isSingle').remove().then(() => {
//     console.log('Data was removed.');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });
// database.ref('age').set(null);
