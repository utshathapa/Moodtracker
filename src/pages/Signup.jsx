import { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation after signup

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just show an alert
    alert(`Signup Successful!\nName: ${firstName} ${lastName}\nEmail: ${email}\nAge: ${age}\nGender: ${gender}`);

    // Clear form
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setAge("");
    setGender("");

    // Navigate to login page (optional)
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 mt-10">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full p-2 border rounded"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full p-2 border rounded"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block mb-1 font-medium">Age (optional)</label>
            <input
              type="number"
              placeholder="Enter your age"
              className="w-full p-2 border rounded"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 font-medium">Gender (optional)</label>
            <select
              className="w-full p-2 border rounded"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Signup
          </button>

          <p className="text-sm text-center text-gray-500 mt-2">
            Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
