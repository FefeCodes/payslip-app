import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Input from "./Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      setIsLoading(false);
      return;
    }

    const result = await login(email, password);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message || "Login failed. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div>
      <div>
        <h2>Log In</h2>
        <p>Sign into your account</p>
      </div>
      <div>
        <form onSubmit={handleLogin}>
          {error && <p>{error}</p>}
          <Input
            type="email"
            value={email}
            name="email"
            label="Email Address"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            value={password}
            name="password"
            label="Password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <p>Forgot password?</p>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
          <div>
            <p>Don't have an account?</p>
            <p>Sign up</p>
          </div>
        </form>
      </div>
    </div>
  );
}
