import { register } from 'services/firebase'
import React from 'react'
import { useState } from 'react'

const Home = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    const user = await register(email, password)

    return user
  }
  return (
    <>
      <h1 className='text-4xl font-bold mb-10'>Register</h1>
      <form onSubmit={onSubmit} className='flex flex-col justify-start gap-4'>
        <div>
          E Mail <br /> <input onChange={(e) => setEmail(e.target.value)} placeholder='E mail' type='text' className='border border-gray-300 px-2 py-1 rounded-md' />
        </div>
        <div>
          Password <br /> <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' className='border border-gray-300 px-2 py-1 rounded-md' />
        </div>
        <div className='mt-2'>
          <button disabled={!email || !password} className='px-3 py-1 bg-blue-600 disabled:bg-blue-300 text-white rounded-md flex-0'>
            Register
          </button>
        </div>
      </form>
    </>
  )
}

export default Home
