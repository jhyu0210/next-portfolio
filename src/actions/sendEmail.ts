"use server";

import ContactFormEmail from '@/email/contact-form-email';
import { getErrorMessage, validateString } from '@/lib/utils';
import React from 'react'
import { Resend } from 'resend';





const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData:FormData) => {
  const senderEmail = formData.get('senderEmail') 
  const message = formData.get('message')
  console.log(senderEmail)
  console.log(message)
  

  // if(!message || typeof message !=="string"){return {error:'Invalid message'}}
  if(!validateString(senderEmail)){
    return {
      error: "Invalid sender email"
    }
  }
  if(!validateString(message)){
    return {
      error: "Invalid message"
    }
  }
  let data;
  try {
    data=await resend.emails.send({
        from: "Contact form <onboarding@resend.dev>",
        to:"jhyu0210@gmail.com",
        subject: "Message from contact form",
        // text:message as string,
        replyTo : senderEmail as string,
        react: React.createElement(ContactFormEmail,{
          message: message as string,
          senderEmail: senderEmail as string
        })
      })
      console.log(data)
    return data;
  } catch (err:unknown) {
      return {
        error: getErrorMessage(err)
      }
  }

}
