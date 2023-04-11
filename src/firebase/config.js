import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8u_EZ8HfhB5_uAOury-fzrEgBx8rvg8M",
  authDomain: "kremer-s-blog.firebaseapp.com",
  projectId: "kremer-s-blog",
  storageBucket: "kremer-s-blog.appspot.com",
  messagingSenderId: "138315803727",
  appId: "1:138315803727:web:fc7b806025a5d33a920e3a",
  measurementId: "G-N5SBWE3KKC"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
