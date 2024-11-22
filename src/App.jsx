import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from './data'
import Tours from './components/Tours'


function App() {
  const [tourse, settourse] = useState(data);
   function removetour(id){
    let newtour =tourse.filter((tour)=>(tour.id!==id))
    settourse(newtour)
}
if(tourse.length===0){
  return(
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='font-bold text-2xl'>No Tours Left</h2>
      <button onClick={()=>settourse(data)} className='bg-slate-200 px-20 py-2 mt-4'>Refresh</button>
    </div>
  )
}
  return (
    <div >
       <div className='flex  flex-col justify-center'>
        <Tours tourse={tourse} settourse={settourse} removetour={removetour}/>
       </div>

    </div>
  )
}

export default App
