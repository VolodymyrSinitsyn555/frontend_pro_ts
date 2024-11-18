import styles from "./myButton.module.css";
import cn from 'classnames'

interface IMyButtonProps {
  text?: string
  isDanger?: boolean
  myType?: "button" | "submit" | "reset"
  func?: () => void
  className?: string
}

const handleDefaultClick = () => {
  console.log("default click!");
};

function MyButton({
  func = handleDefaultClick,
  isDanger = true,
  text = "Click",
  myType = 'button' }:IMyButtonProps) {
  return (
    <button type={myType} onClick={func}
    className={cn(styles.myButton, {
      [styles.btnDanger]:isDanger,
      [styles.btnPrimary]:!isDanger
    })}>
      {text}
    </button>
  );
}

export default MyButton;
