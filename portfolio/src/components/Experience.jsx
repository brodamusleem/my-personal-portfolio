import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const studentActivities = [
  {
    title: 'Project: Web Development Portfolio',
    date: '2024',
    description: 'Developed a personal portfolio website to showcase my skills and projects, using React and tailwindcss and later i will use php for the backend .'
  },
  {
    title: 'Project: E-commerce Website',
    date: '2023',
    description: 'Created a simple e-commerce website for my own small company, focusing on user-friendly design, product management, and shopping cart functionality.'
  },
  {
    title: 'leetcode problem solving',
    date: '2023',
    description: 'Completed some problem in data structures and algorithms, implementing various algorithms in python and solving problems with efficient time complexities.'
  },
  {
    title: 'Startup: Event Management System (Startup Collaboration)',
    date: '2024 - Present',
    description: 'Currently working with a startup focusing on event management systems. My role involves designing and developing features for event scheduling, ticketing, and real-time notifications. The project aims to improve event coordination for various clients and events.'
  },
  
    
]

const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Student Profile</h1>
        <motion.div className='space-y-8'>
            {studentActivities.map((activity, index) => (
                <Reveal key={index}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1 }}
                    className='border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-green-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{activity.title}</h2>
                    <p className='text-gray-300'>{activity.date}</p>
                    <p className='text-gray-400 mt-4'>{activity.description}</p>
                </motion.div>
                </Reveal>
            ))}
        </motion.div>
    </div>
  )
}

export default Experience
