import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const loginHandler = () => {
    dispatch(
      login({
        name: name,
        age: age,
        email: email,
      })
    );
  };

  const logoutHandler = () => {
    // initial state
    dispatch(logout());
  };

  return (
    <div style={inputstyle}>
      <div>
        <button style={button1} onClick={loginHandler}>Login</button>
        <p>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p style={p1}>
          Enter your age:
          <input
            type=""
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </p>
        <p>
          Enter your email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <button style={button2} onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
};

export default Login;


const inputstyle = {
  color: 'white'
}

const p1 = {
  marginLeft: '10px'
}

const button1 = {
  color: 'white',
  width: '60px',
  height: '30px',
  backgroundColor: '#555'
}

const button2 = {
  color: 'white',
  width: '60px',
  height: '30px',
  backgroundColor: '#555'
}