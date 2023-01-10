import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FullLayout from "../Layouts/FullLayout";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
export default function AllRoutes() {
  return (
    <Router>
      <FullLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </FullLayout>
    </Router>
  );
}
