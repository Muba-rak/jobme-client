import axios from "axios";
const baseurl = import.meta.env.VITE_BASE_URL;
export const customFetch = axios.create({
  baseURL: baseurl,
});
