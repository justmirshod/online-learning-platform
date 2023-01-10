import { Link } from "react-router-dom";

export default function FullSidebar() {
  const routes = [
    {
      route: "Home",
      path: "/",
    },
    {
      route: "Progress",
      path: "/progress",
    },
    {
      route: "Messages",
      path: "/messages",
    },
    {
      route: "Settings",
      path: "/settings",
    },
  ];

  return (
    <div className="w-1/5 min-h-screen px-[14px] py-[60px]">
      <div className="brand-logo text-white text-[28px] font-semibold mb-10">
        <span className="inline-flex items-center justify-center w-[50px] h-[50px] rounded-[16px] bg-purple-light mr-6">
          E
        </span>
        <p className="inline-block font-semibold">EduEra</p>
      </div>
      <ul className="flex flex-col">
        {routes.map((item, index) => (
          <li>
            <Link to={item.path}>{item.route}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
