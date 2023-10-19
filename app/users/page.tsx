import React from 'react'
import UserTable from './UserTable'

interface PropsData {
    searchParams : {sortOrder : string};
}

const users = async ({searchParams: {sortOrder}} : PropsData) => {

  return (
    <>
        <h1>Users</h1>
        <UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default users