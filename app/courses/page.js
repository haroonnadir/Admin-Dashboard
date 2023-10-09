"use client"
import { useState, useEffect } from "react"
import { getDocs, collection, query,addDoc, where, deleteDoc, doc, updateDoc} from "firebase/firestore"
import { db } from "@/config/firebase"
import AddStudent from '../addStudent/page';
import React from 'react'
import Headercard from '../(components)/headercard'
import Student from "../student/page";

export default function Courses() {
    const [courses, setCourses] = useState([])
    const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("")
  const [description, setDescription] = useState("")
  const onSubmitHanlder=async()=>{
    let course={
      courseName:courseName,
      courseCode,
      description
    }
    try {
        const collectionName=collection(db,"course")
        console.log(collectionName)
        if(course.courseName===""||course.courseCode===""||course.description===""){
            alert("please Fill all field")
        }
        else{
        await addDoc(collectionName,course)
        console.log("document added");
        await fetchDocs()}
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    const fetchDocs = async ()=> {
        try {
          const collectionName = collection(db, "course")
          const docs = await getDocs(collectionName)
          const courseData = []
          docs.forEach((doc)=>{
            courseData.push({
              id:doc.id,
              ...doc.data()
            })
          })
          setCourses(courseData)
          
          console.log("students",courseData)
          
        } catch (error) {
          console.log("error",error);
        }
      }
      useEffect(() => {
       fetchDocs()
      }, [])
      const onDeletHandler = async (id)=>{
        const docRef = doc(db,"course", id )
    
       try {
        await deleteDoc(docRef)  
        const newCourses = courses.filter((course)=>id !== course.id)
        setCourses(newCourses)
       } catch (error) {
        alert("error")
       }
      }
    
      const onUpdateHandler = async (id)=>{
        try {
          const docRef = doc(db,"course", id)
          await updateDoc(docRef, {
            course:"WMA"
          })
          fetchDocs()
          setLoading(false)
        } catch (error) {
          console.log("error",error)
        }
      }
  return (
    <div>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

<div className="grid lg:grid-cols-3 gap-5 mb-16">
  <div className="rounded text-white text-center pt-5 text-2xl font-bold bg-green-600 h-40 shadow-sm">Total Students <br/> {Student.length}</div>
  <div className="rounded text-white text-center pt-5 text-2xl font-bold bg-red-600 h-40 shadow-sm">Total  Courses <br/>{courses.length}</div>
  <div className="rounded text-white text-center pt-5 text-2xl font-bold bg-blue-600 h-40 shadow-sm">Attendence <br/> 10</div>
</div>
<div className="grid col-1 bg-white h-auto shadow-sm">
<div className='py-8 '>
    <div>
       <label htmlFor='Name' className='pl-10 pr-5 my-1 text-lg'>Course Name:</label><input className='border rounded my-1 px-3 py-1' id='Name' type="text" placeholder="Enter courseName"  onChange={(e)=> setCourseName(e.target.value)}  /><br/>
       <label htmlFor='course' className='pl-10 pr-3 my-1 text-lg'>Course Code:</label><input className='border my-1 rounded px-3 py-1' type="email" placeholder="Enter CourseCode" id='Course' onChange={(e)=> setCourseCode(e.target.value)}  /><br/>
       <label htmlFor='email' className='pl-10 pr-5 my-1 text-lg'>Description:</label> <input className='border my-1 rounded px-3 py-1' id='email' type="email" placeholder="Enter Description"  onChange={(e)=> setDescription(e.target.value)}  />
       </div>
       <div className='text-center mx-auto'><button className="bg-red-500 mx-auto hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mt-4" onClick={onSubmitHanlder}>Add Course</button>
       </div>
       </div>
{/* <div className="mx-auto text-center mt-5"><button className="bg-blue-500 text-white py-2 px-4 w-32 h-10 rounded-md hover:bg-blue-600">
        Add Student
      </button></div> */}
<div class="relative overflow-x-auto py-10">
    <table class="w-full text-sm text-left text-black dark:text-gray-400">
        <thead class="text-md bg-black text-white  uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Course Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Course Code
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Options
                </th>
            </tr>
        </thead>
        <tbody>
            {courses.map((course,i)=>{console.log(course)
                return<tr key={i} class="bg-white dark:bg-gray-800">
                <td scope="row" class="px-4 py-4   dark:text-white">
                    {course.id}
                </td>
                <td class="px-4 py-4">
                    {course.courseName}
                </td>
                <td class="px-4 py-4">
                    {course.courseCode}
                </td>
                <td class="px-4 py-4">
                    {course.description}
                </td>
                <td class="px-4 py-4">
                   <button onClick={()=>onDeletHandler(course.id)} className=' text-white bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl mx-1'>Delete</button>
                   <button onClick={()=>onUpdateHandler(course.id)} className=' text-white bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl mx-1'>Update</button>
                </td>
            </tr>
            })}
            
            
            
            
        </tbody>
    </table>
</div>

</div>
    </div>
  )
}
