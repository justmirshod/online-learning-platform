import SearchPanel from "../../Components/SearchPanel/SearchPanel";
import ShortContainer from "../../Layouts/ShortContainer";
import course_bg from "../../assets/icons/dmitry-chernyshov-mP7aPSUm7aE-unsplash 1.svg";
import avatar from "../../assets/icons/Ellipse 8.svg";
import share_icon from "../../assets/icons/share.svg";
import like_icon from "../../assets/icons/like.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import toggle_icon from "../../assets/icons/toggle-line 1.svg";
import table_icon from "../../assets/icons/table 1.svg";
import menu_icon from "../../assets/icons/menu_icon.svg";
import pen_icon from "../../assets/icons/pen 1.svg";
import database_icon from "../../assets/icons/database 1.svg";
import photoshop_icon from "../../assets/icons/photoshop_icon.svg";

export default function Course() {
  const lessons = [
    {
      name: "Custom Control",
      icon: toggle_icon,
      number: 4,
      duration: 11,
    },
    {
      name: "Create a Table View",
      icon: table_icon,
      number: 5,
      duration: 12,
    },
    {
      name: "Implement Navigation",
      icon: menu_icon,
      number: 6,
      duration: 13,
    },
    {
      name: "Implement Edit",
      icon: pen_icon,
      number: 7,
      duration: 14,
    },
    {
      name: "Persist Data",
      icon: database_icon,
      number: 8,
      duration: 15,
    },
  ];

  return (
    <div className="bg-white rounded-[48px] h-layout w-[90%] ml-auto box-border pt-[30px] pb-[50px]">
      <ShortContainer>
        <SearchPanel />
        <div className="mt-[50px] grid grid-cols-7 gap-10">
          <div className="col-span-5">
            <h1 className="text-[28px] font-semibold">
              Course – Simple Swift App
            </h1>
            <div className="mt-[28px] rounded-[48px] overflow-hidden h-[420px]">
              <img src={course_bg} className="w-full h-auto" alt="" />
            </div>
            <div className="mt-[28px] mb-[28px] flex items-center">
              <div className="border border-orange rounded-full p-[2px] overflow-hidden flex items-center justify-center">
                <img src={avatar} className="mt-[1px] ml-[1px]" alt="" />
              </div>
              <div className="w-full ml-4">
                <h1 className="text-[24px] font-semibold leading-tight">
                  Lesson 6 – Implement Navigation
                </h1>
                <div className="flex items-center justify-between">
                  <p className="text-gray">@dianneed</p>
                  <div className="flex">
                    <div className="mr-8 flex items-center">
                      <img
                        src={like_icon}
                        className="inline-block mr-2"
                        alt=""
                      />
                      <span>145</span>
                    </div>
                    <div className="mr-8 flex items-center">
                      <img
                        src={like_icon}
                        className=" rotate-180 inline-block mr-2"
                        alt=""
                      />
                      <span>6</span>
                    </div>
                    <img src={share_icon} alt=" " />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[2px] bg-gray-light"></div>
            <p className="text-sm mt-[24px] max-w-[600px]">
              In this lesson, you use navigation controllers and segues to
              create the navigation flow of the FoodTracker app. At the end of
              the lesson, you’ll have a complete navigation scheme and
              interaction flow for the app.
            </p>
          </div>
          <div className="col-span-2">
            <div className="flex items-center justify-between">
              <h1 className="text-[28px] font-semibold">Lessons</h1>
              <img src={hamburger} alt="" />
            </div>
            <ul className="flex flex-col mt-[28px]">
              {lessons.map((item, index, arr) => (
                <li className="flex mb-7 items-center">
                  <div className="w-[56px] h-[56px] rounded-[16px] bg-orange flex items-center justify-center mr-4">
                    <img src={item.icon} alt="" />
                  </div>
                  <div
                    className={`w-[80%] ${
                      index === arr.length - 1
                        ? null
                        : "border-b-2 pb-4 border-gray-light"
                    }`}
                  >
                    <h1 className="text-[18px] font-semibold leading-tight">
                      {item.name}
                    </h1>
                    <p className="text-gray text-sm font-semibold">{`Lesson ${item.number} - ${item.duration} min`}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-[16px] grid grid-cols-2 gap-4">
              <div className="bg-[#FAF1F5] flex items-center justify-center h-[218px] rounded-[28px]">
                <img src={photoshop_icon} alt="" />
              </div>
              <div className="bg-[#FFF0EB] text-orange flex items-center justify-center text-[24px] font-semibold h-[218px] rounded-[28px]">
                +4
              </div>
            </div>
          </div>
        </div>
      </ShortContainer>
    </div>
  );
}
