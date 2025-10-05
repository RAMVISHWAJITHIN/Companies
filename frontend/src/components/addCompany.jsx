import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../lib/axios";

const industries = ["IT", "Finance", "Healthcare", "Education", "Retail", "Other"];

const AddCompany = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState({
    name: "",
    industry: "IT",
    imageUrl: "",
    state: "",
    country: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/", {
        name: company.name,
        industry: company.industry,
        imageUrl: company.imageUrl,
        location: {
          city: company.city,
          state: company.state,
          country: company.country,
        },
        description: company.description,
      });
      alert("Company added successfully!");
      navigate("/");
    } catch (err) {
      console.error("Error adding company:", err);
      alert("Failed to add company. Check console for details.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Company</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={company.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />

        <select
          name="industry"
          value={company.industry}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          {industries.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>

        <input
          type="url"
          name="imageUrl"
          placeholder="Company Logo URL"
          value={company.imageUrl}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={company.state}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={company.country}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={company.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Add Company
        </button>
      </form>
    </div>
  );
};

export default AddCompany;
