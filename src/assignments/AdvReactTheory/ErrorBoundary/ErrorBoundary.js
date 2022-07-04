import React from 'react'
import NavBar from '../../../components/navBar/NavBar'


const ErrorBoundary = () => {
  return (
    <div>
      <NavBar />
      Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
      </div>
  )
}

export default ErrorBoundary