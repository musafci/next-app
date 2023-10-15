import React from 'react'

interface User {
    id: number;
    name: string; 
}

const users = async () => {

    // const response = await fetch(
    //     'https://jsonplaceholder.typicode.com/users',
    //     { cache: 'no-store' }) //To disable caching, and this is usefull if data that changes frequently

    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        { next: { revalidate: 10 }  }) //This means next.js is going to run a background job and get fresh data from the backend every 10 second

    // NB:: This caching behavior only implemented in the fetch function, others third party library, you are not going to get the data cache.
    
    const users: User[] = await response.json();

  return (
    <>
        <h1>Users</h1>
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>
  )
}

export default users