import CourseListItem from "./CourseListItem";

const courses = [1, 2];

export default function Courselist() {
  return (
    <div className="grid grid-cols-2 gap-10">
      {courses.map((item, index) => (
        <CourseListItem />
      ))}
    </div>
  );
}
