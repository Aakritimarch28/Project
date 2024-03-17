import './App.css';
import Layout from './pages/theme/Layout';
import Header from './pages/theme/Header';
import Footer from './pages/theme/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/user-management" element={<h1><UserManagement/></h1>} />
          <Route path="/faq" element={<h1>FAQ</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
