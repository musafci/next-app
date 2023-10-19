import Link from 'next/link';
import React from 'react'
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    email: string;
}

interface PropsData {
    sortOrder: string;
}

const UserTable = async ({sortOrder} : PropsData) => {
    console.log(sortOrder);
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await response.json();
    const sortedUsers = sort(users).asc(sortOrder === 'email' ? user => user.email : user => user.name);
    
    return (
        <table className='table table-zebra'>
            <thead>
                <tr>
                    <td>
                        <Link href="/users?sortOrder=name">Name</Link>
                    </td>
                    <td>
                        <Link href="/users?sortOrder=email">Email</Link>
                    </td>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map(user => <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default UserTable