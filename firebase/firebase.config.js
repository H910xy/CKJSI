// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAwtzJI6kWv95Vxv_VeFhX2G5feIa7LSM",
  authDomain: "game-31b35.firebaseapp.com",
  projectId: "game-31b35",
  storageBucket: "game-31b35.appspot.com",
  messagingSenderId: "916909648873",
  appId: "1:916909648873:web:1b527f7fc3d119e5433978"
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)  // bien auth bay gio se su dung thay cho ham getAuth voi config la bien app dc khoi tao tu firebase
export const db = getFirestore(app) // khai bao cho firebase biet minh se su dung firestore database thong qua bien database voi config chinh la bien app khoi tao boi firebaseConfig

export const ROOM_CHAT_COLLECTION = 'Global_Chat' 

// khai báo biến để lấy thông tin từ các trường thu thập
export const FIREBASE_COLLECTIONS = "games" // từ nay trở đi chỉ cần import FIREBASE_COLLECTIONS là có thể sử dụng được bein voi gia tri là games



export const actionCodeSettings = {
    url: 'http://localhost:5173/',
    handleCodeInApp: true,
}