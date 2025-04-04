import { LOGO_URL } from "../utils/constants";

const Logo = () => {
  return (
    <div className="logo-container m-5 p-5 bg-red-300">
      <img className="w-30" src={LOGO_URL} />
    </div>
  );
};

export default Logo;
