import React from 'react'

interface PropsData {
    params: {id: number}
}

const UserDetailsPage = ({params: {id}} : PropsData) => {
  return (
    <>
        <div>UserDetailsPage {id}</div>
    </>
    
  )
}

export default UserDetailsPage