import React from 'react'

const DataTable = props => {
  const { dataName, data } = props

  return (
    <p className="border-2 border-green-500">
      <span className="block py-1 px-2 font-semibold text-white bg-green-500">This is his {dataName}:</span>
      <span className=" block py-1 px-2">{data}</span>
    </p>
  )
}

export default DataTable
