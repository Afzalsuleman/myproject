import React from 'react'
import './Comp1.scss';
function Comp1() {
  return (
    <div className='comp1 flex h-[463px] justify-between relative'> 
      <div className="flex-1 text-white">
        <h1>Research and Resources</h1>
        <p>Exploring the Clients’ Satisfaction With Their Advisors’ ‘Crumbles’, Survey to accelerate innovation and create business value</p>
      </div>
      {/* <div className='h-[463px] absolute top-0 right-0'>
       <img src={comp1} alt="Person working on laptop" className="h-[463px]" />
      </div> */}
    </div>
  )
}

export default Comp1