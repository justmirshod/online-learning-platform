import { Link } from "react-router-dom";
import bg_image from "../../../assets/icons/dmitry-chernyshov-mP7aPSUm7aE-unsplash 1.svg";
import avatar from "../../../assets/icons/Ellipse 8.svg";

export default function CourseListItem() {
  return (
    <Link to="/course">
      <div className="col-span-1 rounded-[48px] overflow-hidden relative">
        <img src={bg_image} alt="" />
        <div className="w-full h-full absolute z-10 top-0 left-0 py-[30px] px-[40px]  rounded-[48px] flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={avatar} alt="" />
              <div className="ml-3">
                <p className="text-18 font-semibold text-white leading-tight">
                  Dianne Edwards
                </p>
                <p className="text-white text-sm leading-tight">@dianneed</p>
              </div>
            </div>
            <div className="w-[80px] text-white text-sm font-semibold rounded-[10px] bg-orange text-center py-[10px]">
              90 min
            </div>
          </div>
          <div className="p-[18px] bg-purple-blur backdrop-blur-lg text-white rounded-[24px] mt-auto">
            Best tips for drawing some good thematic illustration
          </div>
        </div>
      </div>
    </Link>
  );
}
