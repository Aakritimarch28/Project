import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
// import Header from './Header';
// import Footer from './Footer';
import {Outlet} from "react-router-dom";


const Layout = () => {
  return (
    <div class="container" >
      <Header/>
        <div class="row">
            <div class="sidebar">
              <Sidebar/>
            </div>
            <div class="body">
              <Outlet/>
            </div>
        </div>
    </div>
  );
}
export default Layout;