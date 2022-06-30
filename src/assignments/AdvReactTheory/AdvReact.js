import React from 'react'
import NavBar from '../../components/navBar/NavBar'

const AdvReact = () => {
  return (
    <>
        <NavBar /> 
        <div className='container'>
          <h2 className='l'>Questions</h2>
          <ol>
            <li className='l'>Code Splitting ?</li>
            <li className='l'>Error-Boundary ?</li>
            <li className='l'>Context ?</li>
            <li className='l'>Refs and DOM ?</li>
            <li className='l'>Strict Mode ?</li>
            <li className='l'>Type checking with prop types ?</li>
            <li className='l'>Higher order components ?</li>
            <li className='l'>Forwarding Refs ?</li>
          </ol>
          <h2 className='l'>Answers</h2>

        </div>
        
    </>
    

  )
}

export default AdvReact