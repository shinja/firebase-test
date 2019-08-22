import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)

// Initialize your firebase app
firebase.initializeApp({
  projectId: 'todo-9a1bc',
  databaseURL: 'https://todo-9a1bc.firebaseio.com'
})
export const db = firebase.firestore()
