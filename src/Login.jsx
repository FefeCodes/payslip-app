import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Input from "./Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic
    login({ email, password });
    navigate("/dashboard");
  };

  return (
    <div>
      <div>
        <h2>Log In</h2>
        <p>Sign into your account</p>
      </div>
      <div>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="">Email Address</label>
            <Input
              type="email"
              value={email}
              name="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <Input
              type="password"
              value={password}
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>Forgot password?</p>
          <button type="submit">Sign In</button>
          <div>
            <p>Don't have an account?</p>
            <p>Sign up</p>
          </div>
        </form>
      </div>
    </div>
  );
}
