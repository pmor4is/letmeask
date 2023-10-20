// Import dos serviços do firebase
import firebase from 'firebase/compat/app';
// Import dos serviços que realmente serão utilizados
import 'firebase/auth';
import 'firebase/database'

//Importado do serviço de configuração do Firebase
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

firebase.initializeApp(firebaseConfig);

// Definição de constantes para os recursos para o auth e database
const auth = firebase.auth();
const database = firebase.database();