import { Link, useLocation } from "react-router-dom";
import home_icon from "../../assets/icons/apps-2-line 1.svg";
import progress_icon from "../../assets/icons/graph-bar 1.svg";
import messages_icon from "../../assets/icons/chat-3-line (1) 1.svg";
import settings_icon from "../../assets/icons/cog (1) 1.svg";
import contact_img from "../../assets/images/Mask Group.svg";
import "./FullSidebar.css";

export default function FullSidebar() {
  const routes = [
    {
      icon: home_icon,
      route: "Home",
      path: "/",
    },
    {
      icon: progress_icon,
      route: "Progress",
      path: "/progress",
    },
    {
      icon: messages_icon,
      route: "Messages",
      path: "/messages",
    },
    {
      icon: settings_icon,
      route: "Settings",
      path: "/settings",
    },
  ];

  const location = useLocation();

  return (
    <div className="full-sidebar w-1/5 pl-[5px] pt-[20px]">
      <div className="brand-logo text-white text-[28px] font-semibold mb-[50px]">
        <span className="inline-flex items-center justify-center w-[50px] h-[50px] rounded-[16px] bg-purple-light mr-6">
          E
        </span>
        <p className="inline-block font-semibold text-[28px]">EduEra</p>
      </div>
      <ul className="flex flex-col">
        {routes.map((item, index) => (
          <li key={item.route} className="my-[5px]">
            <Link
              to={item.path}
              className={`flex items-center py-[10px] px-[10px] rounded-l-[36px] relative ${
                location.pathname === item.path
                  ? "bg-white text-orange"
                  : "text-white"
              }`}
            >
              <img src={item.icon} alt={item.route} />
              <p className="ml-4">{item.route}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="contact-part px-[30px] py-4 rounded-[32px] w-[220px] mt-[50px] h-[250px] bg-purple-light relative overflow-hidden">
        <h1 className="text-white text-[18px] font-medium mb-1">
          Support 24/7
        </h1>
        <p className="text-gray text-sm mb-2">Contact us any time</p>
        <button className="text-white font-medium rounded-[10px] w-[66px] py-2 text-sm z-10 absolute bg-orange cursor-pointer">
          Start
        </button>
        <div className="absolute h-full -top-[30px] right-0">
          <img src={contact_img} alt="" />
        </div>
      </div>
    </div>
  );
}
