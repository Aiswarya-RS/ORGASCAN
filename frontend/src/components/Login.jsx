import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

      window.location.href =
        "/dashboard";

    } catch (error) {

      alert("Login Failed");

    }
  };

  return (
    <div className="form-card">

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button onClick={loginUser}>
        Login
      </button>

      <br /><br />

      <p>
        Don't have an account?
        <a href="/register"> Register</a>
      </p>

    </div>
  );
}

export default Login;