import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link';

interface PropsData {
    searchParams : {sortOrder : string};
}

const users = async ({searchParams: {sortOrder}} : PropsData) => {

  return (
    <>
        <h1>Users</h1>
        <Link href="/users/new" className='btn'>Add User</Link>
        <UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default users