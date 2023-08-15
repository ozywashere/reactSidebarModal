import links from './utils/links';
import { useGlobalContext } from './context';

function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  return (
    <>
      <aside
        id='default-sidebar'
        className={`fixed top-0 left-0 z-30 w-80 h-full transition-all duration-300 ease-in-out transform -translate-x-full bg-white  border-gray-200  ${
          isSidebarOpen ? 'translate-x-0' : ''
        }`}
        aria-label='Sidebar'
      >
        <div className='flex items-center justify-between px-4 py-3 border-b border-gray-200 h-[96px]'>
          <a href='/' className='text-2xl font-semibold text-gray-900 flex flex-col  justify-center w-full'>
            <span className='text-gray-500 font-bold text-4xl'>Admin</span> Dashboard
          </a>
        </div>

        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-300 '>
          <ul className='space-y-2 font-medium'>
            {links.map((link) => (
              <li key={link.id} className=' transition duration-500 w-full hover:bg-gray-200'>
                <a
                  href={link.path}
                  className='inline-flex items-center justify-between gap-4 py-4  text-gray-900 text-xl tracking-wide font-bold px-4'
                >
                  {link.icon}
                  <span className='self-baseline'>{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {/* overlay */}
      {isSidebarOpen && (
        <div
          className='fixed -z-10 inset-0  bg-gray-900 opacity-50 transition-opacity duration-300 ease-in-out'
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Sidebar;
