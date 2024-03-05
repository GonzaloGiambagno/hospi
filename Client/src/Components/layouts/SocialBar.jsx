import { SocialIcon } from "react-social-icons";

const SocialBar = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out">
      <div className="flex flex-col items-center">
        <div className=" bg-[#3B579D] rounded-tr-xl">
          <SocialIcon
            url="https://www.facebook.com/italianolaplata"
            className="transform hover:translate-x-1 transition-transform duration-300 ease-in-out"
          />
        </div>
        <div className="transform hover:translate-x-1 transition-transform duration-300 ease-in-out bg-[#E1306C]">
          <SocialIcon
            url="https://www.instagram.com/italianolaplata"
            bgColor="#E1306C"
          />
        </div>
        <div className="transform hover:translate-x-1 transition-transform duration-300 ease-in-out bg-black rounded-br-xl">
          <SocialIcon url="https://x.com/italianolaplata" />
        </div>
      </div>
    </div>
  );
};

export default SocialBar;
