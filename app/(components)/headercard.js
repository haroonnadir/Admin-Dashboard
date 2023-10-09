
export default function Headercard() {
  return (
    <>

    <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>

    <div className="grid lg:grid-cols-3 gap-5 mb-16">
      <div className="rounded text-white text-center pt-5  text-2xl font-bold bg-green-600 h-40 shadow-sm">Students</div>
      <div className="rounded text-white text-center pt-5  text-2xl font-bold bg-red-600 h-40 shadow-sm">Courses</div>
      <div className="rounded text-white text-center pt-5  text-2xl font-bold bg-blue-600 h-40 shadow-sm">Attendence</div>
    </div>
    <div className="grid col-1 bg-white h-96 shadow-sm"></div>
  </>
  )
}
