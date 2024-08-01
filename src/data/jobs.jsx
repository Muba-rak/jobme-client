import T1 from "../assets/testimonial1.png";
import T2 from "../assets/testimonial2.png";
import T3 from "../assets/testimonial3.png";

export const testimonials = [
  {
    id: 1,
    image: T1,
    name: "John Doe",
    location: "United Kingdom",
    testimonial: `"This job application app is a game-changer. I quickly found relevant openings and applied seamlessly. The interface is intuitive and user-friendly, making the process stress-free. I highly recommend it to all job seekers!. period"`,
  },
  {
    id: 2,
    image: T2,
    name: "Alice Beck",
    location: "Lagos, Nigeria",
    testimonial: `"I was impressed by the app's efficiency and design. It streamlined my job search, providing useful tools to track applications and receive timely updates. It's a must-have for anyone looking to enhance their job search experience."`,
  },
  {
    id: 3,
    image: T3,
    name: "Xander Cage",
    location: "Germany",
    testimonial: `"The app's features exceeded my expectations. It offers a comprehensive platform for creating and submitting applications. The organized layout and helpful tips made job hunting much less daunting. A fantastic resource for job hunters!"`,
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
