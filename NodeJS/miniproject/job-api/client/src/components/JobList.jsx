import React, { useContext, useEffect, useState } from "react";
import JobItem from "./JobItem";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Default page to 1
  const [maxPage, setMaxPage] = useState(1);
  const [tags, setTags] = useState("");
  const [sort, setSort] = useState("dsc"); // Default sort order to descending
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(300000);
  const handlePageChange = (newPage) => {
    // page change logic
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const url = `http://localhost:5000/api/jobs?page=${currentPage}&tags=${tags}&sortByDate=${sort}&salary_min=${minSalary}&salary_max=${maxSalary}`;
        console.log(url);
        const response = await axios.get(url, { withCredentials: true });
        setJobs(response.data.jobs);
        setMaxPage(response.data.pagination.totalPages);
      } catch (error) {
        console.log("Error fetching jobs", error.message);
      }
    };
    fetchJobs();
  }, [currentPage, tags, sort, minSalary, maxSalary]);

  return (
    <div className="p-4">
      <div className="p-4">
        {/* Filter and sort */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Tags (comma separated)"
            className="border rounded py-2 px-4 w-full"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Sort By:</label>
          <select
            className="border rounded py-2 px-4 w-full"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="dsc">Descending</option>
          </select>
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Minimum Salary"
            className="border rounded py-2 px-4 w-full"
            value={minSalary}
            onChange={(e) => setMinSalary(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Maximum Salary"
            className="border rounded py-2 px-4 w-full"
            value={maxSalary}
            onChange={(e) => setMaxSalary(e.target.value)}
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Job Listings</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobItem job={job} />
        ))}
      </div>

      <div className="flex justify-between mt-4">
        {/* Pagination */}
        <button
          onClick={() => {
            handlePageChange(currentPage - 1);
          }}
          className={`${
            currentPage === 1
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          } px-4 py-2 rounded`}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="text-gray-600">{currentPage}</span>
        <button
          onClick={() => {
            handlePageChange(currentPage + 1);
          }}
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default JobList;
