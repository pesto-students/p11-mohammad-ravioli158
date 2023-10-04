import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function JobDetail() {
  const { id } = useParams(); // Extract the job ID from the URL
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/jobs/${id}` // Use the extracted ID in the URL
        );
        console.log("got respoinse", response.data)
        setJob(response.data); // Set the job details
      } catch (error) {
        console.log("Error fetching job details", error.message);
      }
    };
    fetchJobDetail();
  }, [id]); // Trigger the fetch when the ID changes

  if (!job) {
    // Display a loading message or component while fetching
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="bg-white p-4 rounded shadow-md">
        <h1 className="text-2xl font-semibold">{job.position}</h1>
        <div className="mb-4">
          <img
            src={job.company_logo}
            alt={job.company}
            className="w-24 h-24 rounded-full"
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-600">
            Company: <strong>{job.company}</strong>
          </p>
          <p className="text-gray-600">
            Location: <strong>{job.location || "Remote"}</strong>
          </p>
          <p className="text-gray-600">
            Salary:{" "}
            <strong>
              ${job.salary_min} - $
              {job.salary_max} per year
            </strong>
          </p>
          <p className="text-gray-600">
            Posted on:{" "}
            <strong>{new Date(job.date).toLocaleDateString()}</strong>
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Job Description</h2>
          <div
            dangerouslySetInnerHTML={{ __html: job.description }} // Render HTML content safely
            className="text-gray-800"
          />
        </div>
        <div className="text-center">
          <a
            href={job.apply_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
