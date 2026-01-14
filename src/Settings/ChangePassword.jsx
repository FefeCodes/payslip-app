import Input from "../Input";

export default function ChangePassword() {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <h3>Change Password</h3>
      </div>
      <div>
        <Input
          type="current password"
          value={currentPassword}
          name="current password"
          placeholder="Current Password"
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <Input
          type="new password"
          value={newPassword}
          name="new password"
          placeholder="New Password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Input
          type="confirm new password"
          value={confirmNewPassword}
          name="confirm new password"
          placeholder="Confirm New Password"
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Change Password</button>
      </div>
    </div>
  );
}
