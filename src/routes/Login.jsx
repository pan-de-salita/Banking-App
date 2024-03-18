import { Link, useNavigate } from 'react-router-dom';
import { simulateUserLogin } from './LocalStorage';

export default function Login() {
  const navigate = useNavigate();

  const handleUserLogin = () => {
    simulateUserLogin('john@doe.com', '123456', false)
    alert("Logged in as User")
    navigate('/root')
  }

  const handleAdminLogin = () => {
    simulateUserLogin('stanley@hugo.com', '654321', true)
    alert("Logged in as Admin")
    navigate('/root')
  }

  return (
    <>
      <h1>i am the login page</h1>
      <button onClick={handleUserLogin}>Simulate Uer Login</button>
      <button onClick={handleAdminLogin}>Simulate Admin Login</button>
      <Link to='/root'>click me</Link>
    </>
  );
}
