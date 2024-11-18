import { useFormik } from "formik";
import { useState } from "react";
import MyButton from "../../components/myButton/MyButton";

interface IGenderize {
  firstName: string;
}

interface IGenderInfo{
  name: string
  gender: string
  probability: number
}

export default function Homework12() {
  const [genderInfo, setGenderInfo] = useState<IGenderInfo>();

  const formik = useFormik({
    initialValues: {
      firstName: "",
    } as IGenderize,
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
      <h2>Genderize</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          value={formik.values.firstName}
          type="text"
          name="firstName"
          placeholder="Enter a name"
        />
        <MyButton myType="submit" text="Send" />
      </form>
      {genderInfo && (
        <div>
          <p>Name: {genderInfo.name}</p>
          <p>Gender: {genderInfo.gender}</p>
          <p>Probability: {genderInfo.probability}</p>
        </div>
      )}
    </div>
  );
}
