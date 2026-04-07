import styles from "./CoursesCard.module.css";
import arrow from "../../../assets/arrow.svg"

const courses = [
  {
    id: 1,
    title: "Case Study UI/UX Design about medical app - HaDoc",
    author: "Peter Wilson",
  },
  {
    id: 2,
    title: "How to make animation in Figma",
    author: "Rose Stratton",
  },
  {
    id: 3,
    title: "Make illustration in Blender",
    author: "Brandon Steward",
  },
  {
    id: 4,
    title: "How to make icon in Figma",
    author: "Tom Nolan",
  },
];

const CoursesCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>Today's top courses</div>
        <div className={styles.arrow}>
          <img src={arrow}/>
        </div>
      </div>

      <div className={styles.courseList}>
        {courses.map((course) => (
          <div key={course.id} className={styles.courseRow}>
            <span className={styles.number}>{course.id}.</span>
            <div className={styles.names}>
              <span className={styles.courseTitle}>{course.title}</span>
              <span className={styles.author}>{course.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesCard;
