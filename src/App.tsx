import './App.css'
import Home from './components/home/home'
import { Button } from './components/ui/button'
import { Separator } from './components/ui/separator'

function App() {

  return (
    <>
    <div className='flex justify-center items-center p-4 h-screen'>
      <Home/>
    </div>
    {/* <div className='flex items-center flex-col p-10 gap-3'>
      <h1>Example Page</h1>
      <Separator></Separator>
      <div>
        <Button variant={'outline'}>click me</Button>
        <Button variant={'default'}>click me</Button>
        <Button variant={'destructive'}>click me</Button>
      </div>
    </div> */}
    </>
  )
}

export default App
