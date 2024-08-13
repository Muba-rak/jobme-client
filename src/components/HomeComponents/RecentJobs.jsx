import React, { useState, useEffect } from "react";
import JobCard from "../JobCard";
import Loader from "../Loader";
import { useQuery } from "@tanstack/react-query";
import { customFetch } from "../../utils/axiosInstance";

const RecentJobs = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["recentJobs"],
    queryFn: () => customFetch.get("/jobs/latest"),
  });
  if (isLoading) {
    return <Loader height={"300px"} />;
  }

  return (
    <section>
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        {data.data.jobs.map((job) => {
          return <JobCard key={job._id} {...job} />;
        })}
      </div>
    </section>
  );
};

export default RecentJobs;
