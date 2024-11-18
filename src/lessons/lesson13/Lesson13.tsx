import { useFormik } from "formik";
import MyButton from "../../components/myButton/MyButton";
import styles from './lesson13.module.css';

interface IFormValues {
  model: string;
  creator: string;
  email: string;
}

export default function Lesson13() {

  const formik = useFormik({
    initialValues: {
      model: '',
      creator: '',
      email: ''
    } as IFormValues,
    onSubmit: (values, {resetForm}) => {
      console.log(values)
      resetForm()
    }
  });

  return (
    <div className="lesson-container">
      <h2>Lesson 13: Yup validation</h2>
      <p>Robot form 🤖</p>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm} action="">
        <input value={formik.values.model} onChange={formik.handleChange} name="model" type="text" placeholder="robot model" />
        <input value={formik.values.creator} onChange={formik.handleChange} name="creator" type="text" placeholder="creator name" />
        <input value={formik.values.email} onChange={formik.handleChange} name="email" type="text" placeholder="company email" />
        <MyButton myType="submit" text="send" />
      </form>
    </div>
  );
}