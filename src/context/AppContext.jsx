import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState("");
  const [totalJobs, setTotalJobs] = useState("");
  const [jobType, setJobType] = useState("");
  const [mode, setMode] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const updateJobType = (value) => {
    setPage(1);
    setJobType(value);
  };
  const updateMode = (value) => {
    setMode(value);
    setPage(1);
  };
  const updateIndustry = (value) => {
    setIndustry(value);
    setPage(1);
  };

  const updateLocation = (value) => {
    setLocation(value);
    setPage(1);
  };
  const resetFilters = () => {
    setJobType("");
    setMode("");
    setIndustry("");
    setLocation("");
  };

  const url = "https://jobme-server.onrender.com/api/v1/jobs";

  const getJobs = async () => {
    setIsLoading(true);
    const { data } = await axios(
      `${url}?page=${page}&jobType=${jobType}&mode=${mode}&industry=${industry}&location=${location}`
    );
    setIsLoading(false);
    setJobs(data.jobs);
    setTotalPages(data.totalPages);
    setTotalJobs(data.totalJobs);
  };

  useEffect(() => {
    getJobs();
  }, [page, jobType, mode, industry, location]);

  return (
    <GlobalContext.Provider
      value={{
        jobs,
        isLoading,
        totalPages,
        page,
        setPage,
        totalJobs,
        updateJobType,
        updateIndustry,
        updateLocation,
        updateMode,
        resetFilters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
