import React from 'react'
import SideBar from '../(components)/SideBar'
import Headercard from '../(components)/headercard'
import TopBar from '../(components)/TopBar'
import Layout from '../(components)/Layout'

export default function Dashboard() {
  return (
    <>
     <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

<div className="grid lg:grid-cols-3 gap-5 mb-16">
  <div className="rounded text-white  text-center pt-5 text-2xl font-bold bg-green-600 h-40 shadow-sm">Total Students<br/>2</div>
  <div className="rounded text-white  text-center pt-5 text-2xl font-bold bg-red-600 h-40 shadow-sm">Total Courses<br/>3</div>
  <div className="rounded text-white  text-center pt-5 text-2xl font-bold bg-blue-600 h-40 shadow-sm">Total Attendence<br/>20</div>
</div>

    </>
  )
}
