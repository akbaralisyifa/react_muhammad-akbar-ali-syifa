import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState(true);

  const navigate = useNavigate();

  const dummyData = {
    username: 'admin',
    password: 'admin123',
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validation()) {
      try {
        onAuth({ username, password });
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  };

  const validation = () => {
    if (username === '' || username === null) {
      setValidate(false);
      alert('Masukan Username !');
      return false;
    }
    if (password === '' || password === null) {
      setValidate(false);
      alert('Masukan Password !');
      return false;
    }
    return true;
  };

  const onAuth = (resp) => {
    const { username, password } = resp;

    if (dummyData.username === username && dummyData.password === password) {
      setAuth(true);
      localStorage.setItem('isLogin', 'true');
      navigate('/home');
    } else {
      setValidate(false);
    }
  };

  return (
    <div className="w-80 bg-slate-400 mx-auto mt-24">
      <div className="text-login">
        <h1 className="font-semibold uppercase text-2xl text-center pt-5">Login</h1>
      </div>
      <form className="p-10">
        <div>
          <label htmlFor="username"> Username </label>
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button onClick={handleLogin} className="px-4 py-2 text-white bg-emerald-600 rounded-md mt-5">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
