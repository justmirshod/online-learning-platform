import FullSidebar from "../Components/FullSidebar/FullSidebar";
import { useLocation } from "react-router-dom";
import ShortSidebar from "../Components/ShortSidebar/ShortSidebar";

export default function FullLayout({ children }) {
  const location = useLocation();

  return (
    <div className="flex bg-purple min-h-screen p-[20px] justify-between">
      {location.pathname === "/course" ? <ShortSidebar /> : <FullSidebar />}
      {children}
    </div>
  );
}
