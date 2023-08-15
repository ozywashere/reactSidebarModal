import { useGlobalContext } from './context';

function Modal() {
  const { isModalOpen, setIsModalOpen } = useGlobalContext();

  return (
    <>
      {isModalOpen && (
        <div
          className={`fixed top-0 left-0 right-0 z-40  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-screen ${
            isModalOpen ? 'block' : 'hidden'
          }`}
        >
          {/* Overlay */}
          <div className='absolute top-0 left-0 z-40 w-full h-full bg-black opacity-50' onClick={() => setIsModalOpen(false)}></div>
          {/* Modal Content */}
          <div className='flex w-full items-center justify-center h-full'>
            <div className='relative z-50 bg-gray-50 shadow max-w-2xl w-full '>
              <div className='p-6'>
                <form className='grid gap-6 mb-6  text-left'>
                  <h3 className='mb-5 text-4xl font-bold  text-gray-900 '>Register Form</h3>
                  <div>
                    <label htmlFor='name' className='block mb-2 text-lg'>
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  '
                    />
                  </div>
                  <div>
                    <label htmlFor='email' className='block mb-2 text-lg'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5'
                    />
                  </div>
                  <div className='mt-4'>
                    <label htmlFor='password' className='block mb-2 text-lg'>
                      Password
                    </label>
                    <input
                      type='password'
                      id='password'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5'
                    />
                  </div>
                  <div className='mt-4'>
                    <label htmlFor='password' className='block mb-2 text-lg'>
                      Confirm Password
                    </label>
                    <input
                      type='password'
                      id='password'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5'
                    />
                  </div>
                  <div className='mt-4 '>
                    <label htmlFor='password' className='block mb-2 text-lg'>
                      Phone Number
                    </label>
                    <input
                      type='text'
                      id='password'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-lg  focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5'
                    />
                  </div>

                  <div className='flex'>
                    <button
                      type='button'
                      className='text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300  font-medium  text-lg inline-flex items-center px-5 py-2.5 text-center mr-2'
                      onClick={() => setIsModalOpen(false)}
                    >
                      Sign up
                    </button>
                    <button
                      type='button'
                      className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  border border-gray-200 text-lg font-medium px-5 py-2.5 hover:text-gray-900 '
                      onClick={() => setIsModalOpen(false)}
                    >
                      Sing in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
