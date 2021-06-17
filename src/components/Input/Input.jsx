import { useState } from "react";
import styles from "./input.module.css";

const Input = ({
  inputType,
  effect,
  placeHolderText,
  headerText,
  footerText,
  titleText,
  size = "defaultSizeInput",
  ...props
}) => {
  const [isHover, setIsHover] = useState(false);
  const toggleHover = () => {
    setIsHover(!isHover);
  };

  const outlineHoverStyle = {
    backgroundColor: "green",
  };

  const errorStyle = {
    border: "thin dotted red",
  };

  const normalBtnStyle = {
    borderRadius: "8px",
    border: "thin dotted green",
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
    width: "200px",
    height: "150px",
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
      }
      break;
    case "focus":
      if (isHover) {
        inputStyle = outlineHoverStyle;
      }
      break;
    case "error":
      inputStyle = errorStyle;
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
    case "fullWidth":
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
        onFocus={toggleHover}
        onBlur={toggleHover}
        placeholder={placeHolderText}
      />
      <p>{footerText}</p>
    </div>
  );
};

export default Input;
