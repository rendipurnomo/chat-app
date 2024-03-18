import { SlLogout } from "react-icons/sl";
import useLogout from '../../hooks/useLogout'

const Logout = () => {
  const {logout, loading} = useLogout()
  return (
    <div className="mt-5">
      {!loading ? (
        <button onClick={logout} className="mt-auto flex gap-2 items-center">
      <SlLogout className="text-3xl text-gray-300 cursor-pointer" />
      Logout
    </button>
      ):
      (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  )
}

export default Logout