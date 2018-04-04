import { db } from './firebase';

// User API

export const doCreateUser = (id, name, lastName, email) =>
  db.ref(`users/${id}`).set({
    name,
    lastName,
    email,
  });

export const storageDetails = (id, gender, age) => {
  const ref = db.ref(`users/${id}`);
  let obj = {
    gender: gender,
    age: age
  };
  ref.push(obj)
    .catch(err => {
      console.log(err);
    });
};

export const onceGetUsers = () =>
  db.ref('users').once('value');