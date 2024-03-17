import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input type="text" placeholder='Search...' className='input input-bordered rounded-full text-gray-500'/>
      <button className='btn btn-primary rounded-full'><IoIosSearch size={20} /></button>
    </form>
  )
}

export default SearchInput