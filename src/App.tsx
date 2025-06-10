import './App.css';
import { Outlet } from 'react-router'

function App() {
  return (
    <div className="flex justify-center items-center p-4 h-screen">
      <Outlet />
    </div>
  )
}

export default App;
