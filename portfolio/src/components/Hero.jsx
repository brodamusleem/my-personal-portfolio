import React, { useState } from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./shinyEffect";
import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { SiTailwindcss, SiPython, SiCplusplus } from "react-icons/si";


const categories = {
  "Languages": [
    { name: "HTML", icon: <DiHtml5 className="text-orange-600 text-5xl" />, level: 98 },
    { name: "CSS", icon: <DiCss3 className="text-blue-600 text-5xl" />, level: 95 },
    { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500 text-5xl" />, level: 87 },
    { name: "Python", icon: <SiPython className="text-green-500 text-5xl" />, level: 60 },
    { name: "C++", icon: <SiCplusplus className="text-blue-400 text-5xl" />, level: 45 },
  ],
  "Frameworks & Libraries": [
    { name: "React", icon: <DiReact className="text-blue-500 text-5xl" />, level: 90 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-5xl" />, level: 92 },
  ],
};

const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState("Languages");
 

  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={["Frontend Dev", 1000,"Backend Dev",1000, "Web Designer", 1000, "Entrepreneur", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">MUSLIM H.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am passionate about software development with several years of experience.
          </motion.p>

         
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
            >
              Check my projects
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/brodamusleem"><AiOutlineGithub /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#"><AiOutlineLinkedin /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#"><AiOutlineFacebook /></motion.a>
            </div>
          </motion.div>
        </motion.div>

        
        <motion.img
          src={profilepic}
          className="w-[250px] md:w-[400px] rounded-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

  
      <motion.div
        key={selectedCategory}  
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full max-w-lg mx-auto text-gray-200 py-12"
      >
        <h2 className="text-center text-3xl font-bold mb-6">My Tech Stack</h2>

        <div className="flex justify-center space-x-4 mb-6 cursor-pointer">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(selectedCategory ? ["Languages"]:["Frameworks & Libraries"])}
              className={`px-4 py-2 font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-purple-500 text-white shadow-lg scale-105 cursor-pointer"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105 cursor-pointer"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

       
        <div className="space-y-4">
          {categories[selectedCategory].map((skill, idx) => (
            <div key={idx} className="flex items-center space-x-4">
              {skill.icon}
              <div className="w-full">
                <p className="text-lg">{skill.name} - {skill.level}%</p>
                <div className="w-full bg-gray-700 rounded-full h-2 relative ">
                  <motion.div
                    key={`${selectedCategory}-${idx}`} 
                    initial={{ width: "0%" }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 2.0, ease: "easeInOut" }}
                    className="bg-purple-500 h-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;

