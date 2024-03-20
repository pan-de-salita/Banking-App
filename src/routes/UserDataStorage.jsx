export const usersData = [
    {
        firstName: 'john',
        lastName: 'doe',
        email: 'john@doe.com',
        password: '123456',
        userID: 123456789,
        isAdmin: false,
        accountBalance: 0.00,
    },
    {
        firstName: 'stanley',
        lastName: 'hugo',
        email: 'stanley@hugo.com',
        password: '654321',
        userID: 987654321,
        isAdmin: true,
        accountBalance: 10000000.00,
    },
    {
        firstName: 'jorge',
        lastName: 'doe',
        email: 'jorge@doe.com',
        password: 'hahaha',
        userID: 700880000,
        isAdmin: false,
        accountBalance: 984321.00,
    },
    {
        firstName: 'jill',
        lastName: 'doe',
        email: 'jill@doe.com',
        password: 'iAmJill',
        userID: 111111111,
        isAdmin: false,
        accountBalance: 89.00,
    },
]

//Serialized and save to localStorage
localStorage.setItem('usersData', JSON.stringify(usersData))


//For simulating Admin access
export const simulateUserLogin = (email, password, isAdmin = false) => {
    const user = usersData.find(user => user.email === email && user.password === password)

    if (user) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
        localStorage.setItem('currentUserID', JSON.stringify(user.userID))
    } else {
        console.log('Login failed: User not found or incorrect password')
    }
};