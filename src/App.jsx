import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetails";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="course/:id" element={<CourseDetails />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;