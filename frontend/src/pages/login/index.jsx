import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";


const Login = () => {
  const [input, setInput] = useState({
    username: '',
    password: '',
  })

  const { login, loading } = useLogin()
  const handleSubmit = async(e) => {
    e.preventDefault()
    await login(input)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">
          Login
          <span className="text-yellow-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className="text-gray-600">
          <div>
            <label className="label p-2">
              <span className="label-text text-gray-300 text-base">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full h-10"
              disabled={loading}
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
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full h-10"
              disabled={loading}
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          
              <button className="btn btn-primary w-full mt-4">{loading ? <span className="loading loading-spinner"></span> : 'Login'}</button>

          <p className="text-gray-300 text-base mt-4">
            Don't have an account? <Link to={'/signup'} 
            disabled={loading}
            className='text-yellow-500'>Sign Up</Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;
