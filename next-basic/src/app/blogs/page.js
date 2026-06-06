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
    {  console.log('hello World')}

      <h1>Blogs</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <a href={`/blogs/${post.id}`}>
            <h2 className='font-bold text-blue-400 text-3xl'>{post.title}</h2>
          </a>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  )
}
