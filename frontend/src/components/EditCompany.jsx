import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../lib/axios";

const industries = [
  "IT",
  "Finance",
  "Healthcare",
  "Education",
  "Retail",
  "Other",
];

const EditCompany = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [companyData, setCompanyData] = useState({
    name: "",
    industry: "IT",
    imageUrl: "",
    location: { city: "", country: "" },
    description: "",
  });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await axiosInstance.get(`/${id}`);
        setCompanyData(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching company:", err);
      }
    };
    fetchCompany();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["city", "state", "country"].includes(name)) {
      setCompanyData((prev) => ({
        ...prev,
        location: { ...prev.location, [name]: value },
      }));
    } else {
      setCompanyData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/${id}`, companyData);
      navigate(`/company/${id}`);
    } catch (err) {
      console.error("Error updating company:", err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Edit Company</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={companyData.name}
          onChange={handleChange}
          placeholder="Company Name"
          className="px-4 py-2 rounded-lg border"
          required
        />
        <select
          name="industry"
          value={companyData.industry}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg border"
          required
        >
          {industries.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="imageUrl"
          value={companyData.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="px-4 py-2 rounded-lg border"
        />
        <input
          type="text"
          name="state"
          value={companyData.location.state}
          onChange={handleChange}
          placeholder="State"
          className="px-4 py-2 rounded-lg border"
        />
        <input
          type="text"
          name="country"
          value={companyData.location.country}
          onChange={handleChange}
          placeholder="Country"
          className="px-4 py-2 rounded-lg border"
        />
        <textarea
          name="description"
          value={companyData.description}
          onChange={handleChange}
          placeholder="Description"
          className="px-4 py-2 rounded-lg border"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700"
        >
          Update Company
        </button>
      </form>
    </div>
  );
};

export default EditCompany;
