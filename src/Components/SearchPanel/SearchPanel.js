import search_icon from "../../assets/icons/search (3) 1.svg";
import user_icon from "../../assets/icons/user (1) 1.svg";
import bell_icon from "../../assets/icons/bell-school 1.svg";
export default function SearchPanel() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center bg-gray-light rounded-[20px] px-[30px] w-3/4">
        <img src={search_icon} alt="" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent ml-2 outline-none w-full py-[15px] "
        />
      </div>
      <div className="w-1/5 flex items-center justify-end">
        <img src={user_icon} alt="" />
        <div className="w-[60px] h-[60px] rounded-[20px] bg-orange flex items-center justify-center ml-4">
          <img src={bell_icon} alt="" />
        </div>
      </div>
    </div>
  );
}
