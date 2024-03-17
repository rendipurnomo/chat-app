

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">
          Login
          <span className="text-yellow-500"> ChatApp</span>
        </h1>

        <form>
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
            />
          </div>

          <button className="btn btn-primary w-full mt-4">Login</button>

          <p className="text-gray-300 text-base mt-4">
            Don't have an account? <a href={'/signup'} className='text-yellow-500'>Sign Up</a>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Login;
