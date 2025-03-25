import React from 'react'

import { FaGithubSquare, FaFacebook } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className=''>
      <hr className='w-full'></hr>
        <div className='space-y-4 '>
          
            <h3 className='text-2xl text-gray-200 font-semibold italic flex  justify-center align-center'>@socials</h3>
            <div className='flex flex-row gap-6 text-gray-400 text-4xl  justify-center align-center'>
                <a href="https://github.com/brodamusleem"><FaGithubSquare /></a>
                <a href="#"><FaFacebook /></a>
            </div>

        </div>

        <p className='text-gray-400 flex  justify-center align-center'>{new Date().getFullYear()}</p>
        
    </div>
   
  )
}

export default Footer