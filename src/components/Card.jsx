import React, { useState } from 'react'

const Card = ({id,image,price,info,name,removetour}) => {
    const[readmore,setreadmore]=useState(true);

    let discription=readmore? info.substring(0,200)+'...':info
  return (
    <div className=' w-[400px] m-4 shadow-md shadow-gray-500 rounded-md mx-auto '>
      <div >
        <img src={image} className='aspect-square object-cover w-[380px] m-2 pt-2'/>
      </div>
      <div>
        <span className='text-green-600 font-extrabold text-xl py-2 px-4'>₹ {price}</span>
        <p className='text-xl font-bold px-4 py-2'>{name}</p>
      </div>
      <div className='text-lg py-2 px-4 '>{discription}
        <span onClick={()=>setreadmore(!readmore)} className='text-blue-400'>
            {
            readmore?`Read More`:`Show Less`
            }
            </span>
      </div>
     <div className='m-4 mx-auto'>
        <button onClick={()=>removetour(id)} className='py-2 px-20 rounded-md border-red-600 text-black font-bold bg-red-200 ml-20 hover:bg-red-600  hover:text-white transition-all duration-75  '>Not Interested</button>
     </div>
    </div>
  )
}

export default Card
