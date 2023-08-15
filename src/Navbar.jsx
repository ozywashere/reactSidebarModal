import { useGlobalContext } from './context';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const { isSidebarOpen, setIsSidebarOpen, isModalOpen, setIsModalOpen } = useGlobalContext();
  console.log(isModalOpen)
  return (
    <header className='py-6 bg-gray-300 shadow'>
      <div className='flex w-full mx-auto justify-between px-8 lg:px-16  '>
        <button
          className='text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  border-2 border-gray-200  font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 text-lg'
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <AiOutlineClose className='w-6 h-6' /> : <AiOutlineMenu className='w-6 h-6' />}
        </button>

        <button
          className='text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  border-2 border-gray-200  font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 text-lg '
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Navbar;
