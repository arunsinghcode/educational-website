import { courses } from "../Data/courses";
import { Link } from "react-router-dom";
import "./Courses.css";

function Courses() {
  return (
    <div className="courses-container">
      {courses.map((course) => (
        <div className="card" key={course.id}>
          <img src={course.image} alt={course.title} />

          <div className="card-content">
            <h2>{course.title}</h2>
            <p>{course.description}</p>

            <div className="rating">
              <span>{course.rating}</span>
              <span className="star">★</span>
            </div>

            <div className="buttons">
              <button className="enroll">Enroll Now</button>

              <Link to={`/course/${course.id}`}>
                <button className="know">Know more</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Courses;