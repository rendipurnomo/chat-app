import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp'

const SignUp = () => {
  const [input, setInput] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  })

  const {loading,signup} = useSignUp()

  const handleSubmit = async(e) => {
    e.preventDefault()
    await signup(input)
    }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">
          Sign Up
          <span className="text-yellow-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className='text-gray-600'>
          <div>
            <label className="label p-2">
              <span className="label-text text-gray-300 text-base">
                Fullname
              </span>
            </label>
            <input
            disabled={loading}
              type="text"
              placeholder="Enter your fullname"
              className="input input-bordered w-full h-10"
              value={input.fullName}
              onChange={(e) => setInput({ ...input, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-gray-300 text-base">
                Username
              </span>
            </label>
            <input
              disabled={loading}
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full h-10"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-gray-300 text-base">
                Password
              </span>
            </label>
            <input
              disabled={loading}
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full h-10"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="label-text text-gray-300 text-base">
                Confirm Password
              </span>
            </label>
            <input
              disabled={loading}
              type="password"
              placeholder="Enter your confirm password"
              className="input input-bordered w-full h-10"
              value={input.confirmPassword}
              onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckbox loading={loading} input={input} setInput={setInput} />
          {
            loading ? <span className="loading loading-spinner"></span> : (
              <button className="btn btn-primary w-full mt-4">Sign Up</button>
            )
          }
          

          <p className="text-gray-300 text-base mt-4">
            Already have an account? <Link 
            disabled={loading}
            to={'/login'} className='text-yellow-500'>Login</Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default SignUp