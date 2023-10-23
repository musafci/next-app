import { notFound } from 'next/navigation'
import React from 'react'

interface PropsData {
    params: {id: number}
}

const UserDetailsPage = ({params: {id}} : PropsData) => {
  if(id > 10) notFound();
  return (
    <>
        <div>UserDetailsPage {id}</div>
    </>
    
  )
}

export default UserDetailsPage