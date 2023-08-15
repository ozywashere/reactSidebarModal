import Navbar from './Navbar';

import Sidebar from './Sidebar';
import Content from './Content';

import { useGlobalContext } from './context';
function App() {
  const{isSidebarOpen}=useGlobalContext();
  return (
    <main className='flex'>
      <Sidebar />
      <div className={`w-full flex flex-col  transition-all 
      duration-300 ease-in-out
      ${isSidebarOpen ? 'ml-80' : ''}`}>
        <Navbar />
        <Content />
      </div>
    </main>
  );
}

export default App;
