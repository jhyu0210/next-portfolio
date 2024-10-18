"use client"
import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './section-heading'
import SubmitBtn from './submit-btn'
import { sendEmail } from '@/actions/sendEmail'
import { motion } from 'framer-motion'

export default function Contact() {
    const {ref} = useSectionInView("Contact")
  return (
    <motion.section 
      ref={ref} 
      id="contact" 
      className='mb-20 sm:mb-28 w-[min(100%, 38rem)] scroll-mt-28'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration:1
      }}
      viewport={{
        once:true
      }}
      >
        <SectionHeading> Contact me</SectionHeading>
        <p
        className="text-gray-700 -mt-6">
          Please contact me directly at
          <a href="" className='underline'>jhyu0210@gmail.com</a>
          or through this form
        </p>

    <form action={async (formData)=>{
        await sendEmail(formData)
      }} 
      className='mt-10 flex flex-col'>
      <input 
        className='h-14 px-4 rounded-lg border border-black/10 transition-all'
        type="email" required placeholder='Your email' name="senderEmail" />
      <textarea 
        className='h-52 my-3 rounded-lg border border-black/10 p-4 transition-all'
        name="message" 
        id="" placeholder='Your message' 
        required />
      <SubmitBtn/>  
    </form>
    </motion.section>
  )
}
