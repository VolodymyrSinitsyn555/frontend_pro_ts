import React from 'react'
import { Link } from 'react-router-dom'
import styles from './homePage.module.css';


export default function HomePage() {
  return (
    <div className={styles.gridLessonContainer}>

      <Link to={'lesson-12'}><div>Lesson 12 <p>Formik</p></div></Link>
      <Link to={'lesson-10'}><div>Lesson 10</div></Link>
      <Link to='lesson-1'><div>Lesson 1</div></Link>
      {/* ------------ */}
      <Link to='homework-12'><div className={styles.homework}>Homework 12<p>Genderize</p></div></Link>
      <Link to='homework-8'><div className={styles.homework}>Homework 8</div></Link>
      <Link to='homework-3'><div className={styles.homework}>Homework 3</div></Link>
    </div>
  )
}
