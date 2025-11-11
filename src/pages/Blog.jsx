import React from 'react'
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate()

  function handleClick (id) {
    navigate(`/Blog/${id}`)
  }

  return (
    <main className="h-full bg-indigo-200 p-4">
      <h2>Blog</h2>
    </main>
  );
}

export default Blog