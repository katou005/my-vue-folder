import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router/index"; // 追加

import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 画面に表示されている各自のプロジェクト設定を適宜入力してください,
  authDomain: 画面に表示されている各自のプロジェクト設定を適宜入力してください,
  projectId: 画面に表示されている各自のプロジェクト設定を適宜入力してください,
  storageBucket: 画面に表示されている各自のプロジェクト設定を適宜入力してください,
  messagingSenderId: 画面に表示されている各自のプロジェクト設定を適宜入力してください,
  appId: 画面に表示されている各自のプロジェクト設定を適宜入力してください
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig); ここだけ少し変更しています
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app"); // 変更