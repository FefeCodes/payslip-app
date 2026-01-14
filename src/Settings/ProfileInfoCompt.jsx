import Input from "../Input";

export default function ProfileInfoCompt() {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <h3>Profile Information</h3>
      </div>

      <div>
        <Input
          type="first name"
          value={firstName}
          name="first name"
          placeholder="First Name"
        />
        <Input
          type="last name"
          value={lastName}
          name="last name"
          placeholder="Last Name"
        />
        <Input
          type="email"
          value={email}
          name="email"
          placeholder="Email Address"
        />
      </div>
    </div>
  );
}
