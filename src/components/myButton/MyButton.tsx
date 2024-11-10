// * с объектом props, без деструктуризации
// import './myButton.css'
// function MyButton(props) {
//   return <button onClick={props.func} className="my-button">{props.text}</button>
// }
// export default MyButton;
// * c деструктуризацией
// * мы забираем значения из объекта по ключам и кладем в переменные с соответствующим именем в одну строчку

import "./myButton.css";

// описали интерфейс для пропсов IMyButtonProps
// поскольку у нас указаны значения по умолчанию мы можем поставить вопрос перед свойством сделав его не обязательным для передачи
interface IMyButtonProps {
  text?: string
  isDanger?: boolean
  myType?: "button" | "submit" | "reset"
  func?: () => void
}

const handleDefaultClick = () => {
  console.log("default click!");
};

// интерфейс указываем в круглых скобках после деструктуризации props после двоеточия
function MyButton({
  func = handleDefaultClick,
  isDanger = true,
  text = "Click",
  myType = 'button' }:IMyButtonProps) {
  return (
    <button type={myType} onClick={func} className={`my-button ${isDanger ? "btn-danger" : "btn-primary"}`}>
      {text}
    </button>
  );
}

export default MyButton;
