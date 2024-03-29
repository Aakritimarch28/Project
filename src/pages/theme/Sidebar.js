import React from 'react'
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className='sidebar nav'>
        <li>
      <Link to="/user-management">User Management </Link>
        </li>
        <li>
          <Link to ="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
          
      </ul>
    </div>
  );
}

export default Sidebar;