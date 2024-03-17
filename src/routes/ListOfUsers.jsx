import { useState, useEffect } from "react";

export function ListOfUsers() {
    const [users, setUSers] = useState([])
    const isAdmin = JSON.parse(localStorage.getItem('isAdmin'))

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users'))
        if (storedUsers) {
            setUSers(storedUsers)
        }
    }, [])

    if (!isAdmin) {
        return <div>
            <h1>Log in as Admin</h1>
            <button>Admin Log In</button>
        </div>        
    }
    
    return (
        <div>
            <h1>Admin Dashboard - User Accounts</h1>
            <table>
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Account Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.accountBalance.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}