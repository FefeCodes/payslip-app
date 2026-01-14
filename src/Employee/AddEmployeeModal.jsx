export default function AddEmployeeModal() {
  return (
    <div>
      <div>
        <h4>Add Employee</h4>
      </div>
      <div>
        <div>
          <form>
            <Input
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Enter first name"
              value={firstName}
              onChange={handleInputChange}
            />
            <Input
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Enter last name"
              value={lastName}
              onChange={handleInputChange}
            />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleInputChange}
            />
            <Input
              label="IPPIS Number"
              name="ippisNumber"
              type="text"
              placeholder="Enter IPPIS number"
              value={ippisNumber}
              onChange={handleInputChange}
            />
          </form>
        </div>
        <div>
          <button>Cancel</button>
          <button>Create</button>
        </div>
      </div>
    </div>
  );
}
