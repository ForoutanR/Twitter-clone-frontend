import React from 'react';
import SideBar from "./components/SideBar.jsx";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage'; // Assuming you have this component
import './App.css';

// const App = () => {
//     return (
//         <Router>
//             <div>
//                 <nav style={{ marginBottom: '20px', padding: '10px', background: '#f0f0f0' }}>
//                     <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
//                     <Link to="/register">Register</Link>
//                 </nav>
//                 <Routes>
//                     <Route path="/login" element={<LoginPage />} />
//                     <Route path="/register" element={<RegisterPage />} />
//                     <Route path="/" element={<LoginPage />} /> {/* Redirect to login by default */}
//                 </Routes>
//             </div>
//         </Router>
//     );
// };
function App() {
    return (
        // BEM
        <div className="app">
            <SideBar />
            {/*<Feed />*/}
            {/*<Widgets />*/}
        </div>
    );
}
export default App;
