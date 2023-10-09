"use client"
// contactme.tsx
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {}

function ContactMe({}: Props){
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (typeof window !== 'undefined') {
      window.location.href = `mailto:rakeshrvr1998@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }
  }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <div className='flex flex-col space-y-10'>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <p className='text-2xl font-bold animate-pulse'>519-466-7996</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <p className='text-2xl font-bold animate-pulse'>rakeshrvr1998@gmail.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className="contactInput" type='text' />
            <input {...register('email')} placeholder='Email' className="contactInput" type='text' />
          </div>
          <input {...register('subject')} placeholder='Subject' className="contactInput" type='text' />
          <textarea {...register('message')} placeholder='Message' className="contactInput" />
          <button type='submit' className='bg-[#FFFFFF] py-5 px-10 rounded-md text-black font-bold text-lg animate-pulse'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe