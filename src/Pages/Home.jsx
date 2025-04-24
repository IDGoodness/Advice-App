import React from 'react'
import AdviceResp from '../adviceResp'

const Home = () => {
  return (
    <>
        <div>
            <h1 className='text-3xl font-bold underline text-center'>Home</h1>
            <p className='text-center'>This is the home page</p>
              <p>{ AdviceResp }</p>
        </div>
    
    </>
  )
}

export default Home