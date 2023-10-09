
"use client"

import { db } from "@/config/firebase";
import {  addDoc, collection,getDocs } from "firebase/firestore";
import {useState} from "react"
import React from 'react';

 const AddStudent =({ onClose }) => {
    const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("")
  const [course, setCourse] = useState("")
  const onSubmitHanlder=async()=>{
    let student={
      name:userName,
      email,
      course
    }
    try {
        const collectionName=collection(db,"student")
        console.log(collectionName)
        await addDoc(collectionName,student)
        console.log("document added");
        await fetchDocs()
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">close
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <button onClick={onClose} className=" border border-white bg-gray-300 text-xl hover:bg-gray-400 rounded-full font-bold py-2 px-4  mt-4">
          X
        </button>
        <h2 className="text-xl font-semibold mb-2 text-center">Add Student</h2>
        
       <div className='py-8'>
       <label htmlFor='Name' className='pl-10 pr-5 my-1 text-lg'>Name:</label><input className='border rounded my-1 px-3 py-1' id='Name' type="text" placeholder="Enter name"  onChange={(e)=> setUserName(e.target.value)}  /><br/>
       <label htmlFor='course' className='pl-10 pr-3 my-1 text-lg'>Course:</label><input className='border my-1 rounded px-3 py-1' type="email" placeholder="Enter Course" id='Course' onChange={(e)=> setCourse(e.target.value)}  /><br/>
       <label htmlFor='email' className='pl-10 pr-5 my-1 text-lg'>Email:</label> <input className='border my-1 rounded px-3 py-1' id='email' type="email" placeholder="Enter Email"  onChange={(e)=> setEmail(e.target.value)}  />
       </div>
       <div className='text-center mx-auto'><button className="bg-red-500 mx-auto hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mt-4" onClick={onSubmitHanlder}>Submit</button>
       </div>
      
      </div>
    </div>
  );
};
export default AddStudent;
