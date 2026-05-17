import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-6 mb-20 relative z-20 -mt-10 px-6">
      <div className="bg-gray-700 p-6 rounded-xl flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search jobs..."
          className="flex-1 px-4 py-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none"
        />

        <select className="px-4 py-2 rounded-md bg-gray-900 border border-gray-700">
          <option>All Locations</option>
          <option>Remote</option>
          <option>India</option>
          <option>USA</option>
        </select>

        <button
          onClick={() => navigate("/jobs")}
          className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-500"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
