import React from 'react'
import Card from './Card';

const Tours = (props) => {
    let tourse=props.tourse;
    let settourse=props.settourse;
    let removetour=props.removetour;
  return (
    <div>
      <div className='flex justify-center flex-col mx-auto  mt-4 w-[1300px]'>
        <h2 className='text-center outline-dashed  outline-blue-500 m-4 rounded-md px-10 py-3 text-4xl font-bold max-w-max mx-auto mb-8 '>Plan With AjPatel</h2>
        <div className='flex flex-wrap '>
        {
            tourse.map((tour)=>{
                return <Card key={tour.id} {...tour} removetour={removetour}/>
            })
        }
</div>
      </div>
    </div>
  )
}

export default Tours
