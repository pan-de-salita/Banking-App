import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { simulateUserLogin } from "./UserDataStorage";

export default function ListOfUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    const isAdmin = JSON.parse(localStorage.getItem('isAdmin'))

    const handleAdminLogin = () => {
        simulateUserLogin('stanley@hugo.com', '654321', true)
        alert("Logged in as Admin")
        navigate('/root')
    }

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('usersData'))
        if (storedUsers) {
            setUsers(storedUsers)
        }
    }, [])

    if (!isAdmin) {
        return <div>
            <h1>Log in as Admin</h1>
            <button onClick={handleAdminLogin} className='mt-10 text-white bg-blue-500'>Simulate Admin Login</button>
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
                        <tr key={user.userID}>
                            <td>{user.userID}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.accountBalance ? user.accountBalance.toFixed(2) : 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}