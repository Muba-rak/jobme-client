import T1 from "../assets/testimonial1.png";
import T2 from "../assets/testimonial2.png";
import T3 from "../assets/testimonial3.png";

export const testimonials = [
  {
    id: 1,
    image: T1,
    name: "John Doe",
    location: "United Kingdom",
    testimonial:
      "“Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus aliquet eu gravida massa vel.”",
  },
  {
    id: 2,
    image: T2,
    name: "Alice Beck",
    location: "Lagos, Nigeria",
    testimonial:
      "“Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus aliquet eu gravida massa vel.”",
  },
  {
    id: 3,
    image: T3,
    name: "Xander Cage",
    location: "Germany",
    testimonial:
      "“Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus aliquet eu gravida massa vel.”",
  },
];
import { MdLogout, MdClose } from "react-icons/md";
import { AiOutlineWechat } from "react-icons/ai";
import { FaHandHolding } from "react-icons/fa";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";

export const status = [
  {
    id: 1,
    value: "applied",
    content: "Applied",
    icon: <MdLogout />,
    bg: "bg-success",
  },
  {
    id: 2,
    value: "interview",
    content: "Interviewing",
    icon: <AiOutlineWechat />,
    bg: "bg-success",
  },
  {
    id: 3,
    value: "offer",
    content: "Recieved Offer",
    icon: <FaHandHolding />,
    bg: "bg-success",
  },
  {
    id: 4,
    value: "hired",
    content: "Hired By Employer",
    icon: <FaThumbsUp />,
    bg: "bg-success",
  },
  {
    id: 5,
    value: "not hired",
    content: "Not Hired By Employer",
    icon: <FaThumbsDown />,
    bg: "bg-danger",
  },
  {
    id: 6,
    value: "not interested",
    content: "No Longer Interested",
    icon: <MdClose />,
    bg: "bg-danger",
  },
];

export const jobType = ["fulltime", "part time", "contract", "freelance"];
export const mode = ["remote", "on-site", "hybrid"];
