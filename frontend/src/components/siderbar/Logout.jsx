import { SlLogout } from "react-icons/sl";
import useLogout from '../../hooks/useLogout'

const Logout = () => {
  const {logout, loading} = useLogout()
  return (
    <div className="mt-auto ">
      {!loading ? (
        <button onClick={logout} className="mt-auto">
      <SlLogout className="text-3xl text-gray-300 cursor-pointer" />
    </button>
      ):
      (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  )
}

export default Logout