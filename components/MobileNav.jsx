"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [delayedClose, setDelayedClose] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(!isOpen); // Toggle menu open/close
    if (isOpen) {
      setDelayedClose(true); // Initiate delayed close if menu is currently open
      setTimeout(() => {
        setDelayedClose(false); // Reset delayed close state after the delay
      }, 300); // Adjust delay time (in milliseconds) as needed
    }
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navContent"
            initial={{ translateY: -100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: -100, opacity: 0 }}
            transition={{delay: delayedClose ? 2.4 : 0, duration: 0.4, ease: "easeInOut" }}
          >
      <SheetContent className="flex flex-col">
        {/*logo*/}
              <div className="mt-32 mb-40 text-center text-2xl">
                  <Link href="/">
                      <h1 className="text-4xl font-semibold">
                          Rahul<span className="text-accent">.</span>
                  </h1>
                  </Link>
              </div>
              
                {/*nav*/}
                <nav className="flex flex-col justify-center items-center gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            }text-xl capitalize hover:text-accent transition-all`}
            onClick={handleLinkClick}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
            </SheetContent>
            </motion.div>
        )}
      </AnimatePresence>
    </Sheet>
  );
};

export default MobileNav;
