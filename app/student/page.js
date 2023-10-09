
"use client"
import React from 'react';

import { useState, useEffect } from "react"
import { getDocs, collection, query, where, deleteDoc, doc, updateDoc} from "firebase/firestore"
import { db } from "@/config/firebase"
import AddStudent from '../addStudent/page';
import Courses from '../courses/page';

export default function Student() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
    const [students, setStudents] = useState([])
    const fetchDocs = async ()=> {
        try {
          const collectionName = collection(db, "student")
          const docs = await getDocs(collectionName)
          const studentsData = []
          docs.forEach((doc)=>{
            studentsData.push({
              id:doc.id,
              ...doc.data()
            })
          })
          setStudents(studentsData)
          
          console.log("students",studentsData)
          return students
    
        } catch (error) {
          console.log("error",error);
        }
      }
      useEffect(() => {
       fetchDocs()
      }, [])
      const onDeletHandler = async (id)=>{
        const docRef = doc(db,"student", id )
    
       try {
        await deleteDoc(docRef)  
        const newStudents = students.filter((student)=>id !== student.id)
        setStudents(newStudents)
       } catch (error) {
        alert("error")
       }
      }
    
      const onUpdateHandler = async (id)=>{
        try {
          const docRef = doc(db,"student", id)
          await updateDoc(docRef, {
            email:"naveed@techloset.com"
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
  <div className="rounded text-white  text-center pt-5 text-2xl font-bold bg-green-600 h-40 shadow-sm">Total Students <br/>{students.length}</div>
  <div className="rounded text-white  text-center pt-5 text-2xl font-bold bg-red-600 h-40 shadow-sm">Total Courses <br/>{Courses.length}</div>
  <div className="rounded text-white  text-center pt-5 text-2xl font-bold bg-blue-600 h-40 shadow-sm">Attendence <br/>20</div>
</div>
<div className="grid col-1 bg-white h-auto shadow-sm pb-20">
    <div className=" my-5 flex items-center justify-center">
      <button onClick={openPopup} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Add Student
      </button>
      {isPopupOpen && <AddStudent onClose={closePopup} />}
    </div>
    <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-black dark:text-gray-400">
        <thead class="text-md bg-black text-white  uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Student Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Course
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Options
                </th>
            </tr>
        </thead>
        <tbody>
            {students.map((student,i)=>{console.log(student)
                return<tr key={i} class="bg-white dark:bg-gray-800">
                <td scope="row" class="px-4 py-4   dark:text-white">
                    {student.id}
                </td>
                <td class="px-4 py-4">
                    {student.name}
                </td>
                <td class="px-4 py-4">
                    {student.course}
                </td>
                <td class="px-4 py-4">
                    {student.email}
                </td>
                <td class="px-4 py-4">
                   <button onClick={()=>onDeletHandler(student.id)} className=' text-white bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl mx-1'>Delete</button>
                   <button onClick={()=>onUpdateHandler(student.id)} className=' text-white bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl mx-1'>Update</button>
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
