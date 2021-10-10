import React from 'react';
import ReactDOM from 'react-dom';
import './scss/global.scss';
import reportWebVitals from './reportWebVitals';
import Header from "./component/Header/Header";
import MainLayout from "./component/MainLayout/MainLayout";
import Footer from "./component/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <MainLayout className="wrapper" />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
