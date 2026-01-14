import Input from "./Input";

export default function SignUp() {
  return (
    <div>
      <div>
        <h2>Sign Up</h2>
        <p>Create a new account</p>
      </div>
      <div>
        <label htmlFor="">First Name</label>
        <Input
          type="first name"
          value={firstName}
          name="first name"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          type="last name"
          value={lastName}
          name="last name"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          type="email"
          value={email}
          name="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="confirm password"
          value={confirmPassword}
          name="confirm password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button>Create Account</button>
        <div>
          <p>Already have an account?</p>
          <p>Sign in</p>
        </div>
      </div>
    </div>
  );
}
