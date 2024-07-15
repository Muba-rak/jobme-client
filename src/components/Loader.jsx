import React from "react";
import { PropagateLoader } from "react-spinners";

const Loader = ({ height }) => {
  return (
    <div
      style={{ height }}
      className="d-flex justify-content-center align-items-center my-3"
    >
      <PropagateLoader color="#0DCAF0" />
    </div>
  );
};

export default Loader;
