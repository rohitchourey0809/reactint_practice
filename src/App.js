import React from "react";
import { Route, Routes } from "react-router-dom";
import Basic from "./component/BasicFormik/Formik";
import UploadComp from "./component/FileUpload/UploadComp";
import GradingSystem from "./component/GraddingSystem/GradingSystem";
import GradingSystemReact from "./component/GraddingSystem/GradingSystemReact";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Home from "./component/pages/Home";
import Quantity from "./component/Quantity/Quantity";

import ReactFormik from "./component/ReactFormik/ReactFormik";
import ReactTable from "./component/Reacttable/ReactTable";

function App() {
  return (
    <>
     <div>
     <Routes>
      <Route path="/home" exact element={<Home />}/>
      <Route path="/contact" exact element={<Contact />}/>
      <Route path="/about" exact element={<About />}/>
      <Route path= "/reacttable" exact element={<ReactTable/>}/>
      <Route path= "/reactformik" exact element={<ReactFormik/>}/>
      <Route path= "/grading" exact element={<GradingSystem/>}/>
      <Route path= "/gradingreact" exact element={<GradingSystemReact/>}/>
      <Route path= "/cardvalue" exact element={<Quantity/>}/>
      <Route path= "/basic" exact element={<Basic/>}/>
      <Route path="/fileupload" exact element={<UploadComp/>}/>

      </Routes>
     </div>
    </>
  );
}

export default App;
