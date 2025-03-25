import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../assets/1.png';


const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariant = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">

      <div className="max-w-[1300px] mx-auto  flex justify-between text-gray-100 text-xl items-center px-12 h-20">
       <h1 className="font-bold text-gray-100 text-xl md:text-5xl italic mt-6">MUSL<span className="font-bold text-blue text-xl md:text-5xl italic mt-6">IM H.</span></h1>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
        <li>
              <Link
                to="skills"
                smooth={true}
                offset={50}
                onClick={closeNav}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                smooth={true}
                offset={50}
                onClick={closeNav}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                offset={50}
                onClick={closeNav}
                duration={500}
              >
                Contact
              </Link>
            </li>
        </ul>

        <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? 'open' : 'closed'}
          variants={menuVariant}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
        >
          <ul className="font-semibold text-4xl space-y-8 mt-24 text-center">
            <li>
              <Link
                to="skills"
                smooth={true}
                offset={50}
                onClick={closeNav}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                smooth={true}
                offset={50}
                onClick={closeNav}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                offset={50}
                onClick={closeNav}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default NavBar;
