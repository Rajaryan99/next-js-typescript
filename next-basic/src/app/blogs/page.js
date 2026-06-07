import Link from 'next/link'
import React from 'react'

export default async function page() {

  const data = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: "no-store"})
  const posts = await data.json()


  // const posts = [
  //   {
  //     id: 'one',
  //     title: "First Post",
  //     content: "This is the content of the first post."
  //   },
  //   {
  //   id: 2,
  //   title: "Second Post",
  //   content: "This is the content of the second post."
  // },
  //  {
  //   id: 3,
  //   title: "Third Post",
  //   content: "This is the content of the third post."
  // }

  // ]

  console.log('posts = ' + posts)
  console.log("data = " + data)

  return (
    <>
   
<div className=' w-[100px] m-5 p-4 bg-amber-600 font-bold text-2xl rounded-2xl'>
      <h1 className=' '>Blogs</h1>
      </div>

      <div className=' flex justify-center text-center grid grid-cols-3 p-4'>

      {posts.map((post) => (
        <div key={post.id} className='p-4 m-4 h-[400px] w-[350px]  overflow-hidden border-2 border-gray-300 rounded-lg '>
          <Link href={`/blogs/${post.id}`}>
            <h2 className='font-bold text-xl underline text-amber-600 transition'>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
        </div>


      ))}
      </div>
    </>
  )
}
