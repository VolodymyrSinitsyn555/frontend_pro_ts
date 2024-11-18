import { useFormik } from "formik";
import { useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import styles from "./formGender.module.css";
import * as Yup from "yup";

interface IGenderize {
  firstName: string;
}

interface IGenderInfo {
  name: string;
  gender: string;
  probability: number;
}

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "The name must be longer than 2 characters.")
    .max(50, "The name must be shorter than 50 characters.")
    .required("The name is required.")
    .matches(/^[A-Za-z\s]+$/, "The name can only contain letters and spaces.")
    .matches(/^[A-Z]/, "The name must start with a capital letter.")
    .trim()
    .required("The name must not be empty.")
    .matches(
      /^[A-Za-zА-Яа-яёЁ\s]+$/,
      "The name must be in Latin or Cyrillic alphabet."
    ),
});

export default function FormGender() {
  const [genderInfo, setGenderInfo] = useState<IGenderInfo>();

  const formik = useFormik({
    initialValues: {
      firstName: "",
    } as IGenderize,
    validateOnChange: false,
    validationSchema: schema,
    onSubmit: async (values, { resetForm }) => {
      const response = await fetch(
        `https://api.genderize.io/?name=${values.firstName}`
      );
      const data = await response.json();
      setGenderInfo(data);
      resetForm();
    },
  });

  return (
    <div className="lesson-container">
      <h2>Homework 12. Formik</h2>
      <h4>Find out the gender through the name✨</h4>
      <form className={styles.genderForm} onSubmit={formik.handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputWrapper}
            onChange={formik.handleChange}
            value={formik.values.firstName}
            type="text"
            name="firstName"
            placeholder="Enter a name"
          />
          <span className={styles.error}>{formik.errors.firstName}</span>
        </div>
        <MyButton myType="submit" text="Send" />
      </form>
      {genderInfo && (
        <p>
          {genderInfo.name} is{" "}
          {genderInfo.gender === "male" ? "💁‍♂️ male" : "💁‍♀️ women"}{" "}
          {genderInfo.probability * 100}%
        </p>
      )}
    </div>
  );
}
