import {useState, useEffect} from 'react'

export function GetBalance(){
    const [balance, setBalance] = useState("")
    const currentUserID = "user1"

    useEffect(() => {
        const storedData = localStorage.getItem('user1')
        if (storedData) {
            const userData = JSON.parse(storedData)
            const userBalance = userData[currentUserID]?.accountBalance
            if (userBalance !== undefined) {
                setBalance(userBalance)
            }
        }
    }, [])

    return(
        <div>
            {balance != null ? (
                <div>
                    <h1>{userAccount}</h1>
                    <h2>{GetBalance}</h2>
                </div>
            ) : (
                <div>
                    <p>No Available Balance</p>
                </div>
            )}
        </div>
    )
}