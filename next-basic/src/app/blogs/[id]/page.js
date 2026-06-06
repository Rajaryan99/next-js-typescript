import React from 'react'

export default async function  page({params}) {

  const ps = await params;
  console.log('data = ' + ps.id)
  return (
    <div>One blogs page details : {ps.id} </div>
  )
}
