import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    
    <div className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white p-4">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700 transition"
        >
          Go to Home
        </Link>
      </div>
  )
}

export default ErrorPage
