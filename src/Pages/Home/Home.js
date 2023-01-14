import SearchPanel from "../../Components/SearchPanel/SearchPanel";
import FullContainer from "../../Layouts/FullContainer";
import Courselist from "./components/CourseList";
import "./Home.css";
export default function Home() {
  return (
    <div className="h-layout bg-white w-4/5 ml-auto rounded-[48px]">
      <FullContainer>
        <div className="mt-[30px]">
          <SearchPanel />
        </div>
        <div className="mt-[50px]">
          <h1 className="text-[24px] font-medium">Your unfinished courses</h1>
          <div className="mt-[20px]">
            <Courselist />
          </div>
        </div>
      </FullContainer>
    </div>
  );
}
