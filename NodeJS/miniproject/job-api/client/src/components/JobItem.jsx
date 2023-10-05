import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
const JobItem = ({ job }) => {
  console.log(job);
  return (
    <Link to={`/${job.slug}`}>
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <h3 className="text-lg font-semibold mb-2">{job.position}</h3>
        <p>{job.company}</p>
        <p className="text-gray-600 mb-2">Tags: {job.tags.join(", ")}</p>
        <p className="text-gray-600">
          Posted on: {moment(job.date).format("MMM Do, YYYY")}
        </p>
        <p className="text-gray-600">
          Salary: {job.salary_min}$ to {job.salary_max}$
        </p>
      </div>
    </Link>
  );
};

export default JobItem;
