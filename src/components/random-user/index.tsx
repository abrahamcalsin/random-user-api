import React, { useEffect, useState } from 'react'

import { getAllUsers } from '../../services/users/get-all-users'
import DataTable from '../data-table'
import Loader from '../loader'

const RandomUser = () => {
  const [user, setUser] = useState<{
    picture: string
    name: string
    lastname: string
    email: string
    postcode: string
    city: string
    phone: string
    password: string
  } | null>(null)

  const [loading, setLoading] = useState(true)

  const updateUser = () => {
    getAllUsers().then(data => {
      const userData = {
        picture: data.results[0].picture.large,
        name: data.results[0].name.first,
        lastname: data.results[0].name.last,
        email: data.results[0].email,
        postcode: data.results[0].location.postcode,
        city: data.results[0].location.city,
        phone: data.results[0].phone,
        password: data.results[0].login.password,
      }

      setUser(userData)
      setLoading(false)
    })
  }

  useEffect(() => {
    updateUser()
  }, [])

  return (
    <>
      <div className="inline-block overflow-hidden m-auto max-w-xl text-gray-600 bg-white rounded-md border-2 border-gray-200">
        <div className="py-5 px-10 text-xl font-bold text-center border-b-2 border-gray-200">
          <h1>Random User - API</h1>
        </div>
        <div className="p-5">
          <div>
            {loading ? <Loader /> : null}
            {user ? (
              <div className="flex flex-col items-center px-5">
                <div className="overflow-hidden w-28 rounded-full border-4 border-gray-300 hover:border-green-500 transition duration-200 cursor-pointer">
                  <img src={user.picture} alt="profile-image" className="block w-full" />
                </div>
                <div className="flex gap-1 mt-5 text-xl font-bold">
                  <p className="">{`${user.name} ${user.lastname}`}</p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center items-center mt-5 text-left">
                  <DataTable dataName="Email Address" data={user.email} />
                  <DataTable dataName="Address" data={`${user.postcode} ${user.city}`} />
                  <DataTable dataName="Phone Number" data={user.phone} />
                  <DataTable dataName="Password" data={user.password} />
                </div>
              </div>
            ) : null}
          </div>
          <div className="flex justify-center mt-10 mb-5">
            <button
              onClick={updateUser}
              className="py-2 px-4 font-bold text-white bg-green-500 hover:bg-green-600 rounded-sm focus:ring-4 focus:ring-green-300 shadow-lg focus:outline-none"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RandomUser
