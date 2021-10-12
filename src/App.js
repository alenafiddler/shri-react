import Header from "./component/Header/Header";
import MainLayout from "./component/MainLayout/MainLayout";
import Footer from "./component/Footer/Footer";
import React from "react";
import {BrowserRouter} from "react-router-dom";

function App(){
  return(
    <BrowserRouter>
      <Header />
      <MainLayout className="wrapper"/>
      <Footer/>
    </BrowserRouter>
  )
}
export default App
