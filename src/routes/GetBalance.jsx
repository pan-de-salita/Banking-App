import {useState, useEffect} from 'react'

export default function GetBalance() {
    const [balance, setBalance] = useState(null)
    const currentUserID = "user1"

    useEffect(() => {
        const storedData = localStorage.getItem('usersData')
        if (storedData) {
            const users = JSON.parse(storedData)
            const user = users.find(user => user.userID === currentUserID)
            if (user) {
                setBalance(user.accountBalance)
            }
        }
    }, [])

    return(
        <div>
            {balance != null ? (
                <div>
                    <h2>Available Balance: ${balance.toFixed(2)}</h2>
                </div>
            ) : (
                <div>
                    <p>No Available Balance</p>
                </div>
            )}
        </div>
    )
}