'use client'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BsArrowRight, BsLinkedin} from "react-icons/bs"
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

const Intro = () => {
  const {ref} = useSectionInView('Home')
  return (
    <section ref= {ref} className='text-center mb-28 max-w-[50rem] sm:mb-0 scroll-mt-28' id='home' >
      <div className='flex items-center justify-center'>
        <div className='relative'>
            <motion.div
              initial={{opacity:0, scale:0}}
              animate={{ opacity:1,scale:1}}
              transition={{
                type:"tween",
                duration: 0.2
              }}
              >
              <Image 
              src="https://media.istockphoto.com/id/1288538088/ko/%EC%82%AC%EC%A7%84/%EC%B9%B4%EB%A9%94%EB%9D%BC%EC%99%80-%EB%AF%B8%EC%86%8C%EB%A5%BC-%EB%B0%94%EB%9D%BC%EB%B3%B4%EB%8A%94-%EC%A0%8A%EC%9D%80-%EC%9E%90%EC%8B%A0%EA%B0%90-%EC%9E%88%EB%8A%94-%EB%98%91%EB%98%91%ED%95%9C-%EC%95%84%EC%8B%9C%EC%95%84-%EC%82%AC%EC%97%85%EA%B0%80.jpg?s=612x612&w=is&k=20&c=GJBYH11QYKNkT1JQFuKVWy_6lLyAbPQu0pqKZsbpkng=" 
              alt="my-face" width='192' height='192'
              className='h-24 w-24 object-cover rounded-full border-[0.32rem] border-white shadow-xl' quality="95" priority={true}/>
            </motion.div>
            <motion.span
            initial = {{opacity:0,scale:0}}
            animate = {{opacity:1,scale:1}}
            transition={{
              type:"spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
            className='text-4xl absolute bottom-0 right-0'>👏</motion.span>
        </div>
      </div>
      <motion.p 
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      
      className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
        <span className="font-bold">Hello, I'm Ricardo.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>
      
      <motion.div 
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{
        delay: 0.1,
        duration: 0.7,
        type:"tween"
      }}
      className='flex flex-col justify-center items-center sm:flex-row gap-2 text-lg font-medium px-4'>
        <Link 
          href="#contact"
          className='group bg-gray-900 text-white px-7 py-3 flex gap-2 rounded-full items-center outline-none  focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all'
          >
          Contact me here{" "}
          <BsArrowRight className='opacity-60 group-hover:translate-x-1 transition '/>
        </Link>
        <a href="/Basic_Resume.pdf" download  className='group bg-white px-7 py-3 flex gap-2 rounded-full items-center outline-none  focus:scale-110 hover:scale-110 transition border border-black/10 cursor-pointer'
        >
          Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
         </a>
         <a href="https://linkedin.com" target='_blank'  className='bg-white text-gray-700 hover:text-gray-950 px-4 py-3 rounded-full outline-none  focus:scale-[1.30] hover:scale-[1.30] flex justify-center items-center transition border border-black/10 cursor-pointer
         active:scale-105'
        >
          <BsLinkedin />
         </a>
         <a href="https://github.com" target='_blank'  className='bg-white text-gray-700 hover:text-gray-950 px-4 py-3 rounded-full outline-none focus:scale-[1.30] hover:scale-[1.30] flex justify-center items-center transition border border-black/10 cursor-pointer
         active:scale-105'
        >
          <FaGithubSquare />
         </a>
      </motion.div>
    </section>
  )
}

export default Intro