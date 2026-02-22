import { Link } from "react-router-dom";
import { courses } from "../data/courses";

function Home() {
  return (
    <div>
      <h1>Educational Platform</h1>

      {courses.map((course) => (
        <div key={course.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>

          <Link to={`/course/${course.id}`}>View Course</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;