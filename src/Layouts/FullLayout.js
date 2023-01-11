import FullSidebar from "../Components/FullSidebar/FullSidebar";

export default function FullLayout({ children }) {
  return (
    <div className="flex bg-purple min-h-screen p-[20px]">
      <FullSidebar />
      {children}
    </div>
  );
}
