import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const industries = [
  "All",
  "IT",
  "Finance",
  "Healthcare",
  "Education",
  "Retail",
  "Other",
];

const Navbar = ({ onSearch, onFilter }) => {
  const [search, setSearch] = useState("");
  const [filterIndustry, setFilterIndustry] = useState("All");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterIndustry(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <nav className=" bg-opacity-95 backdrop-blur-md text-blue-500 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1
          className="text-2xl font-bold cursor-pointer hover:text-blue-200 transition"
          onClick={() => navigate("/")}
        >
          MyCompany
        </h1>

        <div className="flex flex-col md:flex-row md:items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search companies..."
            value={search}
            onChange={handleSearchChange}
            className="px-4 py-2 rounded-lg w-full md:w-64 text-black focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
          />
          <select
            value={filterIndustry}
            onChange={handleFilterChange}
            className="px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
          >
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>

          <button
            onClick={() => navigate("/add-company")}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 shadow-md transition"
          >
            + Add Company
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
