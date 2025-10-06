import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../lib/axios";

const CompanyList = ({ searchTerm, filterIndustry }) => {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axiosInstance.get("/");
        setCompanies(res.data.data || res.data);
      } catch (err) {
        console.error("Error fetching companies:", err);
      }
    };
    fetchCompanies();
  }, []);

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = filterIndustry === "All" || company.industry === filterIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredCompanies.map((company) => (
        <div
          key={company._id}
          onClick={() => navigate(`/company/${company._id}`)}
          className="cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition flex flex-col items-center"
        >
          <img
            src={company.imageUrl}
            alt={company.name}
            className="w-24 h-24 object-contain mb-4"
          />
          <h2 className="text-xl font-semibold">{company.name}</h2>
          <p className="text-gray-600">{company.industry}</p>
        </div>
      ))}
    </div>
  );
};

export default CompanyList;
