import Link from 'next/link'
import React from 'react'

export default function page() {


  const posts = [
    {
      id: 'one',
      title: "First Post",
      content: "This is the content of the first post."
    },
    {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post."
  },
   {
    id: 3,
    title: "Third Post",
    content: "This is the content of the third post."
  }

  ]

  console.log('posts = ' + posts)

  return (
    <>
   
<div className=' w-[100px] m-5 p-4 bg-amber-600 font-bold text-2xl rounded-2xl'>
      <h1 className=' '>Blogs</h1>
      </div>

      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/blogs/${post.id}`}>
            <h2 className='font-bold text-blue-400 text-3xl'>{post.title}</h2>
          </Link>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  )
}
