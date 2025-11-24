import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [history, setHistory] = useState([]);

  const navigate = useNavigate();

  const handleAddMood = (e) => {
    e.preventDefault();
    if (!mood) return;

    const newEntry = {
      mood,
      note,
      date: new Date().toLocaleString(),
    };

    setHistory([newEntry, ...history]);
    setMood("");
    setNote("");
  };

  const handleLogout = () => {
    navigate("/"); // go back to login page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Mood Tracker</h1>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>

      {/* Mood Input */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6 max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">How are you feeling today?</h2>
        <form className="flex flex-col gap-3" onSubmit={handleAddMood}>
          <select
            className="p-2 border rounded"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            required
          >
            <option value="">Select Mood</option>
            <option value="Happy">😊 Happy</option>
            <option value="Neutral">😐 Neutral</option>
            <option value="Sad">😢 Sad</option>
            <option value="Angry">😡 Angry</option>
          </select>

          <textarea
            className="p-2 border rounded"
            placeholder="Write your thoughts..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Add Mood
          </button>
        </form>
      </div>

      {/* Mood History */}
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Mood History</h2>
        {history.length === 0 ? (
          <p className="text-gray-500">No moods logged yet.</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {history.map((entry, idx) => (
              <li
                key={idx}
                className="bg-white p-4 rounded shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{entry.mood}</p>
                  <p className="text-gray-500 text-sm">{entry.note}</p>
                </div>
                <span className="text-gray-400 text-xs">{entry.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;