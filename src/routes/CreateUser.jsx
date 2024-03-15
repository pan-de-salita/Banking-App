// TODO: create a user
// const user = {
//   email: ...
//   password: ...
//   userID: ...
//   firstName: ...
//   lastName: ...
//   isAdmin: false
//   accountBalance: ...
// }
// TODO: save user in localStorage 

export default function CreateUser() {
  class User {
    constructor(firstName, lastName, email, password, accountBalance) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.userID = Math.random();
      this.isAdmin = false;
      this.accountBalance = accountBalance;
    }
  }

  function createUserFromFormResults(e) {
    e.preventDefault();
    const arrOfFormHTMLElements = [...e.target.elements];
    const arrOfFormResponseValues = arrOfFormHTMLElements.map(input => input.value);
    // creates a new user
    const newUser = new User(...arrOfFormResponseValues);

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = [...existingUsers, newUser];

    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // console.log(new User(...[...e.target.elements].map(input => input.value)));
    // console.log(newUser);
    //
    // const ourArr = ['a', 'b', 'c'];
    // console.log(ourArr);
    // console.log(...ourArr);
    //
    // function printLetters(first, second, third) {
    //   console.log(`first argument: ${first}`);
    //   console.log(`second argument: ${second}`);
    //   console.log(`third argument: ${third}`);
    //
    // }
    // printLetters(ourArr);
    // printLetters(...ourArr);
  }

  return (
    <>
      {/* returns an object */}
      <form onSubmit={createUserFromFormResults} action="">
        <label>
          First Name:
          <input type="text" placeholder='juan' />
        </label>
        <label>
          Last Name:
          <input type="text" placeholder='dela cruz' />
        </label>
        <label>
          Email Address:
          <input type="text" placeholder='juandelacruz@xyz.com' />
        </label>
        <label>
          Password
          <input type="password" placeholder='password' />
        </label>
        <label>
          Balance
          <input type="number" placeholder='00.00' />
        </label>
        <button>submit</button>
      </form >
    </>
  );
}

