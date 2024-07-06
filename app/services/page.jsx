"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Offering full-stack web development services, including responsive design, interactive UIs, and backend integration. Specializing in React.js, Node.js, and modern web technologies to build scalable and efficient web applications.",
    href: "",
  },
  {
    num: "02",
    title: "Blockchain Development",
    description:
      "Providing end-to-end blockchain development services, including smart contract creation, DApp development, and token integration. Specializing in Ethereum, Solidity, and Web3.js to build secure and decentralized applications.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Delivering intuitive and engaging UI/UX design services, focusing on user-centered design principles. Specializing in creating visually appealing and user-friendly interfaces that enhance user experience and drive engagement.",
    href: "",
  },
  {
    num: "04",
    title: "Software Development",
    description:
    "Providing comprehensive software development services, from requirements analysis to deployment. Specializing in building robust, scalable, and efficient software solutions tailored to meet client needs using modern development practices.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/*description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
