import { useParams } from "react-router-dom";
import { courses } from "../Data/courses";

function CourseDetails() {
  const { id } = useParams();

  const course = courses.find((c) => c.id === Number(id));

  if (!course) return <h2>Course not found</h2>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.content}</p>
    </div>
  );
}

export default CourseDetails;