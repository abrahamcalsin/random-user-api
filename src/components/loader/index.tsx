import React from 'react'

const Loader = () => {
  return (
    <div className="flex flex-col items-center mb-5 text-center animate-pulse">
      <div className="w-28 h-28 bg-gray-300 rounded-full"></div>
      <div className="my-5 w-24 h-6 bg-gray-300 rounded-sm"></div>
      <div className="flex flex-wrap gap-4 justify-center mt-0 max-w-xs">
        <div className="w-36 h-12 bg-gray-300"></div>
        <div className="w-36 h-12 bg-gray-300"></div>
        <div className="w-36 h-12 bg-gray-300"></div>
        <div className="w-36 h-12 bg-gray-300"></div>
      </div>
    </div>
  )
}
export default Loader
