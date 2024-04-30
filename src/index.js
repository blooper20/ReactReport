import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Clock from './04/Clock'
import CommentList from './05/CommentList'
// import NotificationList from './06/NotificationList';
// import Counter from './07/Counter';
// import Calculator from './07/Calculator';
// import TestCallBack from './07/TestCallBack';
// import TextInputWithFocusButton from './07/TextInputWithFocusButton';
// import Accomodate from './07/Accomodate';
import LandingPage from './09/LandingPage';
// import Blog from './10/Blog';
import SignUp from './11/FruitSelect';
// import Calculator from './12/Calculator';
// import WelcomeDialog from './13/WelcomeDialog';
// import App from './14/App';
// import DarkOrLight from './14/DarkOrLight';
// import Box from './15/Box';
// import StyledJsx from './15/StyledJsx';
import MainPage from './15/MainPage';
import ToDoList from './report/ToDoList';

import reportWebVitals from './reportWebVitals';


const root = 
ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
