// Import dos serviços do firebase
import firebase from 'firebase/compat/app';
// Import dos serviços que realmente serão utilizados
import 'firebase/auth';
import 'firebase/database'

//Importado do serviço de configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCugM5ZjFOPnhJSeWwP5l03xQaDnbeqDmM",
    authDomain: "letmeask-12493.firebaseapp.com",
    databaseURL: "https://letmeask-12493-default-rtdb.firebaseio.com",
    projectId: "letmeask-12493",
    storageBucket: "letmeask-12493.appspot.com",
    messagingSenderId: "360629236717",
    appId: "1:360629236717:web:ea29c5ecd6861e2e3a2de4"
  };

firebase.initializeApp(firebaseConfig);

// Definição de constantes para os recursos para o auth e database
const auth = firebase.auth();
const database = firebase.database();