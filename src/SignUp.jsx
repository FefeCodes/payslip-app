import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "./api";
import Input from "./Input";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await api.post("/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.data) {
        // Redirect to login page upon successful registration
        navigate("/");
      }
    } catch (err) {
      console.error("Registration failed:", err);
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold">Sign Up</h2>
        <p className="text-gray-600">Create a new account</p>
      </div>

      <form onSubmit={handleSignUp} className="flex flex-col gap-4 w-80">
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        <Input
          type="text"
          label="First Name"
          value={firstName}
          name="firstName"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          type="text"
          label="Last Name"
          value={lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          type="email"
          label="Email Address"
          value={email}
          name="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          label="Password"
          value={password}
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-blue-400 cursor-pointer"
        >
          {isLoading ? "Creating Account..." : "Create Account"}
        </button>

        <div className="flex justify-center gap-2 mt-2">
          <p>Already have an account?</p>
          <Link to="/" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
