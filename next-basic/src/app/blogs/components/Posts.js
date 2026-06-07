"use client"

import React from 'react'
import Link from 'next/link'
import {use} from 'react'



export default function Posts({posts}) {

    console.log("posts = " + posts)
    const allposts = use(posts)

    console.log("clint componnets")
  return (
 <div className=' flex justify-center text-center grid grid-cols-3 p-4'>

      {allposts.map((post) => (
        <div key={post.id} className='p-4 m-4 h-[400px] w-[350px]  overflow-hidden border-2 border-gray-300 rounded-lg '>
          <Link href={`/blogs/${post.id}`}>
            <h2 className='font-bold text-xl underline text-amber-600 transition'>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
        </div>


      ))}
      </div> 
  )
}
