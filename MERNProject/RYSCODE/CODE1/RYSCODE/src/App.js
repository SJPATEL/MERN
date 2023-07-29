import React from 'react'
import Home from './Client/_page/Home'
import './Client/Telerik & Kendo UI - .NET Components Suites & JavaScript UI Libraries_files/home.css';
import './Client/Telerik & Kendo UI - .NET Components Suites & JavaScript UI Libraries_files/index.min.css';
import './Client/Telerik & Kendo UI - .NET Components Suites & JavaScript UI Libraries_files/style.css';
import './Client/Telerik & Kendo UI - .NET Components Suites & JavaScript UI Libraries_files/style2.css';
import './Client/Telerik & Kendo UI - .NET Components Suites & JavaScript UI Libraries_files/prism.css';


import Navbar from './Client/_component/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './Client/_page/About';
import Content from './Client/_page/Content';
import Errorpage from './Client/_page/ErrorPage';
import Authentication from './Client/_page/Authentication';
import Admin from './Admin/Admin';
import AdminLogin from './Admin/AdminLogin';
const App = () => {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route  path="/Authentication" element={<Authentication />} />
        </Routes>
        <Routes>
          <Route  path="/about" element={<About/>} />
        </Routes>
        <Routes>
          <Route  path="/content" element={<Content />} />
        </Routes>
        <Routes>
          <Route  path="/admin" element={<Admin />} />
        </Routes>
        <Routes>
          <Route  path="/adminlogin" element={<AdminLogin />} />
        </Routes>

        <Routes>
          <Route path="*" element={<Errorpage />} />
        </Routes>

      </Router>
      

    </>
  )
}

export default App

