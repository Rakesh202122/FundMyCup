import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation"
import connectDB from '@/db/connectDb'
import User from '@/models/User'

const Username = async({params}) => {
  //if the username is not present in the database show 404 page
  const checkUser = async () => {
    await connectDB()
    let u = await User.findOne({ username: params.username})
  if(!u){
    return notFound()
  }
}
await checkUser()

  return (
    <>
      
    {/* <div className='cover w-full relative'>
      <img className='object-cover w-full' src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZWJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
    </div> */}

    <PaymentPage username={params.username}/>
    </>
  )
}

export default Username

export async function generatedMetadata({params}){
  return {
    title: `Support ${params.username} - Get Me A Chai` 
  }
}