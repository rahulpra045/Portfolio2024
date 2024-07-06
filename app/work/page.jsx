"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "prject 1",
        description:
            "Built a React.js application using TMDB APIs for browsing movies, TV shows, and trending content. Integrated Firebase for user authentication with Google sign-in and account management. Implemented a watchlist feature and light/dark mode for enhanced user experience and responsive UI design.",
        stack: [
            {
                name: "React.js"
            },
            {
                name: "Html 5"
            },
            {
                name: "Css3"
            },
            {
                name: "Javascript"
            },
        ],
        image: "/assets/work/thumb1.png",
        live: "https://m0vies-library.netlify.app/",
        github: "https://github.com/rahulpra045/Movie-Library",
    },

    {
        num: "02",
        category: "Blockchain",
        title: "prject 2",
        description: "Developed a React application integrating with Uniswap, enabling Metamask pairing for seamless transactions. Implemented live fetching of smart contract data and empowered users to create ERC20 tokens within the platform, facilitating token swaps and decentralized trading.",
        stack: [
            {
                name: "React.js"
            },
            {
                name: "Metamask"
            },
            {
                name: "Web3.js"
            },
            {
                name: "Ether.js"
            },
            
        ],
        image: "/assets/work/thumb2.png",
        live: "https://krypt0-web3.netlify.app/",
        github: "https://github.com/rahulpra045/Krypt-Web3",
    },

    {
        num: "03",
        category: "frontend",
        title: "prject 3",
        description: "Developed a weather application using React.js, allowing users to search for weather information for up to four cities simultaneously. Integrated WeatherAPI to fetch and display detailed weather data, enhancing user experience with real-time weather updates.",
        stack: [
            {
                name: "React.js"
            },
            {
                name: "Javascript"
            },
            {
                name: "Weather Api"
            },
        ],
        image: "/assets/work/thumb3.png",
        live: "https://github.com/rahulpra045/Weather-Application",
        github: "https://github.com/rahulpra045/Weather-Application",
    },
    {
        num: "04",
        category: "frontend",
        title: "prject 4",
        description: "Created a simple and engaging frontend application using React.js, featuring a search functionality that allows users to find their favorite monsters. The clean and responsive design ensures a smooth user interaction, making it easy to search and explore various monsters.",
        stack: [
            {
                name: "React.js"
            },
            {
                name: "Javascript"
            },
            {
                name: "Html"
            },
        ],
        image: "/assets/work/thumb4.png",
        live: "https://rahulpra045.github.io/monsters-rolodex/",
        github: "https://github.com/rahulpra045/monsters-rolodex",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;

        //update project state based on current slide index
        setProject(projects[currentIndex]);
    };
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {delay:2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/*project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            {/* Project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stacks */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/*border */}
                            <div className="border border-white/20"></div>
                            {/*buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}

                                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github project button */}

                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/*overlay*/}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/*image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                src={project.image}
                                                fill
                                                    className="object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    
                                );
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
  
};

export default Work;