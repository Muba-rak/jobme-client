import React from "react";
import {
  MdOutlinePerson,
  MdOutlineSettings,
  MdHelpOutline,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useQuery } from "@tanstack/react-query";
import { customFetch } from "../utils/axiosInstance";

const UserProfileMenu = () => {
  const token = localStorage.getItem("token");

  const { isLoading, data } = useQuery({
    queryKey: ["userProfile"],
    queryFn: () =>
      customFetch.get("/user", {
        headers: { Authorization: `Bearer ${token}` },
      }),
  });

  return (
    <div
      className="bg-white rounded-3 p-3 shadow-lg"
      style={{ width: "240px" }}
    >
      <h1 className="fs-5 my-2">Account Information</h1>
      <Link to="/appliedjobs">
        <p className="my-3 fs-5">
          <MdOutlinePerson size={24} />
          <span className="ms-2">My Profile</span>
        </p>
      </Link>
      <Link to="/contact">
        <p className="my-3 fs-5">
          <MdOutlineSettings size={24} />
          <span className="ms-2">Settings</span>
        </p>
      </Link>

      <Link to="/contact">
        <p className="my-3 fs-5">
          <MdHelpOutline size={24} />
          <span className="ms-2">Help Center</span>
        </p>
      </Link>
      {!isLoading ? (
        <div className="d-flex gap-2 align-items-center border border-dark border-start-0 border-end-0 py-1 mt-2">
          <div>
            <img
              src={data.data.user?.image}
              style={{ width: "41px", height: "41px" }}
              alt=""
              className="rounded-circle"
            />
          </div>
          <div>
            <h6>
              {data.data.user?.firstName} {data.data.user?.lastName}
            </h6>
            <small style={{ fontSize: "12px" }}>
              {" "}
              {data.data.user?.email}{" "}
            </small>
          </div>
        </div>
      ) : (
        <Loader height="30px" />
      )}
    </div>
  );
};

export default UserProfileMenu;
