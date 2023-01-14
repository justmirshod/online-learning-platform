import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import FullLayout from "../Layouts/FullLayout";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import Course from "../Pages/Course/Course";
export default function AllRoutes() {
  const { activeLayout } = useSelector((state) => state.layout);

  return (
    <Router>
      <FullLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </FullLayout>
    </Router>
  );
}
