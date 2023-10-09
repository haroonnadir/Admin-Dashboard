import React from 'react'
import Headercard from '../(components)/headercard'
import Student from '../student/page'
import Courses from '../courses/page'

export default function Attendence() {
   
  return (
    <div>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

<div className="grid lg:grid-cols-3 gap-5 mb-16">
  <div className="rounded text-white text-center pt-5  text-2xl font-bold bg-green-600 h-40 shadow-sm">Total Students<br/>2</div>
  <div className="rounded text-white text-center pt-5  text-2xl font-bold bg-red-600 h-40 shadow-sm">Total Courses<br/>3</div>
  <div className="rounded text-white text-center pt-5  text-2xl font-bold bg-blue-600 h-40 shadow-sm">Attendence <br/>20</div>
</div>
<div className="grid col-1 bg-white h-96 shadow-sm">
<div class="relative overflow-x-auto py-10">
    <table class="w-full text-sm text-left text-black dark:text-gray-400">
        <thead class="text-md bg-black text-white  uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Attendence Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Course Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Options
                </th>
            </tr>
        </thead>
        <tbody>
            
                <tr class="bg-white dark:bg-gray-800">
                <td scope="row" class="px-4 py-4   dark:text-white">
                    1
                </td>
                <td class="px-4 py-4">
                    12
                </td>
                <td class="px-4 py-4">
                    33
                </td>
                <td class="px-4 py-4">
                    Present
                </td>
                <td class="px-4 py-4">
                   <button  className=' text-white bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl mx-1'>Delete</button>
                   <button  className=' text-white bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl mx-1'>Update</button>
                </td>
            </tr>
           
            
            
            
            
        </tbody>
    </table>
</div>
</div>
    </div>
  )
}
