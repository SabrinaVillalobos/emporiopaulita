import { db } from './firebase';

// User API

export const doCreateUser = (id, name, lastName, email) =>
  db.ref(`users/${id}`).set({
    name,
    lastName,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');