const usersData = [
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
        firstName: 'jane',
        lastName: 'doe',
        email: 'jane@doe.com',
        password: '654321',
        userID: 987654321,
        isAdmin: false,
        accountBalance: 100.00,
    },
    {
        firstName: 'jorge',
        lastName: 'doe',
        email: 'jorge@doe.com',
        password: 'hahaha',
        userID: 700880000,
        isAdmin: false,
        accountBalance: 987654321.00,
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

