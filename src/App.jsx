import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      }

      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Hello Tailwind!</h1>
          <p className="text-gray-700 text-lg">
            Welcome to your Mood Planner. Tailwind makes styling React apps super easy!
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
