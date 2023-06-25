// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCibq29QkNDpA202Z7IrCeqicQlhvSJi24",
  authDomain: "nhjsi07-575b2.firebaseapp.com",
  projectId: "nhjsi07-575b2",
  storageBucket: "nhjsi07-575b2.appspot.com",
  messagingSenderId: "720940454001",
  appId: "1:720940454001:web:6ce02797ebda828b838bd0",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBnqjDh7na_x4B0AemoWcN0RBIIrQ2GuzA",
//   authDomain: "nhjsi05.firebaseapp.com",
//   projectId: "nhjsi05",
//   storageBucket: "nhjsi05.appspot.com",
//   messagingSenderId: "20949558268",
//   appId: "1:20949558268:web:b6567d7d421c452e14c879",
// };





// Initialize Firebase
const app = initializeApp(firebaseConfig);  // khoi tao firebase project
export const auth = getAuth(app)  // bien auth bay gio se su dung thay cho ham getAuth voi config la bien app dc khoi tao tu firebase
export const db = getFirestore(app) // khai bao cho firebase biet minh se su dung firestore database thong qua bien database voi config chinh la bien app khoi tao boi firebaseConfig

export const ROOM_CHAT_COLLECTION = 'Global_Chat' // khai bao ten collection

// khai báo biến để lấy thông tin từ các trường thu thập
export const FIREBASE_COLLECTIONS = "Songs" // từ nay trở đi chỉ cần import FIREBASE_COLLECTIONS là có thể sử dụng được bein voi gia tri là Songs


export const actionCodeSettings = {
    url: 'http://localhost:5173/',
    handleCodeInApp: true,
}