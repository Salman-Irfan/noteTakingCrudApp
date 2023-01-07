import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "myAPIKey",
    authDomain: "myAuthDomain.firebaseapp.com",
    projectId: "myProjectId",
    storageBucket: "myStorageBucket",
    messagingSenderId: "mySenderId",
    appId: "myAppId",
    measurementId: "myMeasurementId"
  };

  const app = initializeApp(firebaseConfig);
  
