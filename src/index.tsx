import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import RootRouter from "./router/index";

const AddStore = () => (
  //   <Provider store={store}>
  <RootRouter />
  //   </Provider>
);

// var config = {
//     apiKey: "AIzaSyDDZI6bO7nY6qLtrh7saRKJx80zvzO4GfM",
//     authDomain: "benzcomunity.firebaseapp.com",
//     databaseURL: "https://benzcomunity.firebaseio.com",
//     projectId: "benzcomunity",
//     storageBucket: "",
//     messagingSenderId: "978542336621"
//   };
//   firebase.initializeApp(config);

ReactDOM.render(<AddStore />, document.getElementById("root"));
registerServiceWorker();
