import { useState } from "react";
import styles from "./input.module.css";

const Input = ({
  inputType,
  placeHolderText,
  headerText,
  footerText,
  titleText,
  size,
  ...props
}) => {
  const [isHover, setIsHover] = useState(false);
  const toggleHover = () => {
    setIsHover(!isHover);
  };

  const [isFocus, setIsFocus] = useState(false);
  const toggleFocus = () => {
    setIsFocus(!isFocus);
  };

  const outlineHoverStyle = {
    border: "3px solid blue",
    cursor: "default",
  };

  const outlineFocusStyle = {
    border: "thick double blue",
    cursor: "default",
  };

  const errorStyle = {
    border: "1px solid #D32F2F",
  };

  const normalBtnStyle = {
    borderRadius: "8px",
    border: "1px solid #828282",
  };

  const disabledStyle = {
    background: "#F2F2F2",
  };

  //Input Size
  const defaultSizeInput = {
    width: "200px",
    height: "56px",
  };

  const smallSizeInput = {
    width: "200px",
    height: "40px",
  };

  const largeSizeInput = {
    width: "250px",
    height: "66px",
  };

  const fullWidthInput = {
    width: "900px",
    height: "66px",
  };

  const multirowSizeInput = {
    width: "200px",
    height: "150px",
  };

  let inputStyle;
  switch (inputType) {
    case "hover":
      if (isHover) {
        inputStyle = outlineHoverStyle;
      } else {
        inputStyle = normalBtnStyle;
      }
      break;
    case "focus":
      if (isFocus) {
        inputStyle = outlineFocusStyle;
      } else {
        inputStyle = normalBtnStyle;
      }
      break;
    case "error":
      inputStyle = errorStyle;
      break;
    case "disabled":
      inputStyle = disabledStyle;
      break;
    default:
      inputStyle = normalBtnStyle;
      break;
  }

  let inputSize;
  switch (size) {
    case "small":
      inputSize = smallSizeInput;
      break;
    case "large":
      inputSize = largeSizeInput;
      break;
    case "fullwidth":
      inputSize = fullWidthInput;
      break;
    case "multirow":
      inputSize = multirowSizeInput;
      break;
    default:
      inputSize = defaultSizeInput;
      break;
  }

  return (
    <div className={styles.input}>
      <p className="titleText">{titleText}</p>
      <p>{headerText}</p>
      <input
        type="text"
        style={{ ...normalBtnStyle, ...inputSize, ...inputStyle }}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        placeholder={placeHolderText}
      />
      <p>{footerText}</p>
    </div>
  );
};

export default Input;
