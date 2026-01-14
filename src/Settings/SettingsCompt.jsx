import EmailVerifyCompt from "./EmailVerifyCompt";
import TwoFactorCompt from "./TwoFactorCompt";
import ProfileInfoComt from "./ProfileInfoComt";
import ChangePassword from "./ChangePassword";

export default function SettingsCompt() {
  return (
    <div>
      <EmailVerifyCompt />
      <TwoFactorCompt />
      <ProfileInfoComt />
      <ChangePassword />
    </div>
  );
}
