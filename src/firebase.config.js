import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAm_bwgV2hvQfd7kn5ovkXi9zEnguRD_xI",
  authDomain: "restaurantapp-b82b6.firebaseapp.com",
  databaseURL: "https://restaurantapp-b82b6-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-b82b6",
  storageBucket: "restaurantapp-b82b6.appspot.com",
  messagingSenderId: "603678283180",
  appId: "1:603678283180:web:0fc9b9a012adebbce35609"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
