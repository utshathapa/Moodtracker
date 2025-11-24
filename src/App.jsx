import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
function App() {
  return (
    <>
      {
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
      }
      <Home/>
      
     
    </>
  );
}

export default App;
