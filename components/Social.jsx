import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa";

const socials = [
  {
    icons: <FaGithub />,
    path: "https://github.com/rahulpra045",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    icons: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/rahul-prasad-b17208204/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    icon: 
      <FaCode/>,
    path: "https://leetcode.com/u/rahulpra045/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  ,
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target={item.target}
            rel={item.rel}
            className={iconStyles}
          >
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
