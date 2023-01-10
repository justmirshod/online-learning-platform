import FullSidebar from "../Components/FullSidebar/FullSidebar";

export default function FullLayout({ children }) {
  return (
    <div className="flex items-center bg-purple p-[24px]">
      <FullSidebar />
      {children}
    </div>
  );
}
