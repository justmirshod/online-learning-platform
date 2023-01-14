import { Link, useLocation } from "react-router-dom";
import home_icon from "../../assets/icons/apps-2-line 1.svg";
import progress_icon from "../../assets/icons/graph-bar 1.svg";
import messages_icon from "../../assets/icons/chat-3-line (1) 1.svg";
import settings_icon from "../../assets/icons/cog (1) 1.svg";
import contact_img from "../../assets/images/Mask Group.svg";
import contact_icon from "../../assets/icons/customer-service-line 1.svg";
import hover_home_icon from "../../assets/icons/hover_home.svg";
export default function ShortSidebar() {
  const location = useLocation();
  const routes = [
    {
      icon: home_icon,
      hoverIcon: hover_home_icon,
      route: "Home",
      path: "/",
    },
    {
      icon: progress_icon,
      hoverIcon: progress_icon,
      route: "Progress",
      path: "/progress",
    },
    {
      icon: messages_icon,
      hoverIcon: messages_icon,
      route: "Messages",
      path: "/messages",
    },
    {
      icon: settings_icon,
      hoverIcon: settings_icon,
      route: "Settings",
      path: "/settings",
    },
  ];

  return (
    <div className="full-sidebar flex flex-col justify-between w-[8%] box-border py-[40px] fixed">
      <div>
        <div className="brand-logo text-white text-[28px] font-semibold text-center mb-20">
          <span className="inline-flex items-center justify-center w-[50px] h-[50px] rounded-[16px] bg-purple-light">
            E
          </span>
        </div>
        <ul className="flex flex-col items-center">
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
                <img
                  src={
                    location.pathname === item.path ? item.hoverIcon : item.icon
                  }
                  alt={item.route}
                />
                {/* <p className="ml-4">{item.route}</p> */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[56px] h-[56px] rounded-[16px] bg-purple-light mx-auto flex items-center justify-center">
        <img src={contact_icon} alt="" />
      </div>
    </div>
  );
}
