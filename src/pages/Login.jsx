import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Login
          </button>
        </form>

        {/* Bottom Text */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <button className="hover:underline">Forgot password?</button>
        </div>

        <div className="mt-2 text-center text-gray-700 text-sm">
          Don't have an account?{" "}
          <button className="text-blue-600 hover:underline font-medium"
          onClick={()=>navigate("/Signup")}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
