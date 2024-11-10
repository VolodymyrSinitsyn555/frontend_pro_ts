// * с объектом props, без деструктуризации
// import './myButton.css'
// function MyButton(props) {
//   return <button onClick={props.func} className="my-button">{props.text}</button>
// }
// export default MyButton;
// * c деструктуризацией
// * мы забираем значения из объекта по ключам и кладем в переменные с соответствующим именем в одну строчку

import "./myButton.css";

const handleDefaultClick = () => {
  console.log("default click!");
};
function MyButton({ func = handleDefaultClick, isDanger = true, text = "Click", myType='button' }) {
  return (
    <button type={myType} onClick={func} className={`my-button ${isDanger ? "btn-danger" : "btn-primary"}`}>
      {text}
    </button>
  );
}

export default MyButton;
