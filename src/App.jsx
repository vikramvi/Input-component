import Input from "./components/Input";
import Nav from "./components/Nav";
import "./App.css";
import { FcHeadset } from "react-icons/fc";

function App() {
  const navLinks = ["typography", "grid", "buttons", "inputs"];

  return (
    <div className="container">
      <div className="nav-section">
        <span className="logo">
          <span className="orange">Dev</span>
          <span>challenges.io</span>
        </span>
        <Nav links={navLinks} />
      </div>
      <div className="content-section">
        {/* Normal Input */}
        <div className="threeItemsRow">
          <Input
            inputType="normal"
            titleText="<Input />"
            headerText="Label"
            placeHolderText="Placeholder"
          />
          <Input
            inputType="normal"
            titleText="&:hover"
            headerText="Label"
            inputEffect="hover"
            placeHolderText="Placeholder"
          />
          <Input
            inputType="normal"
            titleText="&:focus"
            headerText="Label"
            inputEffect="focus"
            placeHolderText="Placeholder"
          />
        </div>
        {/* Error Input */}
        <div className="threeItemsRow">
          <Input
            inputType="error"
            titleText="<Input error />"
            headerText="Label"
            placeHolderText="Placeholder"
          />
          <Input
            inputType="error"
            titleText="&:hover"
            headerText="Label"
            inputEffect="hover"
            placeHolderText="Placeholder"
          />
          <Input
            inputType="error"
            titleText="&:focus"
            headerText="Label"
            inputEffect="focus"
            placeHolderText="Placeholder"
          />
        </div>
        {/* Disabled Input */}
        <div className="singleItemRow">
          <Input
            inputType="normal"
            titleText="<Input disabled />"
            headerText="Label"
            placeHolderText="Placeholder"
          />
        </div>
        {/* 2 Buttons with some interestint text */}
        <div className="twoItemsRow">
          <Input
            inputType="normal"
            titleText="<Input helperText=”Some interesting text” />"
            headerText="Label"
            footerText="Some interesting text"
            placeHolderText="Placeholder"
          />
          <div className="secondChildComponent">
            <Input
              inputType="error"
              titleText="<Input helperText=”Some interesting text” error />"
              headerText="Label"
              footerText="Some interesting text"
              placeHolderText="Placeholder"
            />
          </div>
        </div>
        {/* 2 input fields with icons */}
        <div className="twoItemsRow">
          <Input
            inputType="normal"
            titleText="<Input startIcon />"
            headerText="Label"
            footerText="Some interesting text"
            placeHolderText="Placeholder"
          />
          <div className="secondChildComponent">
            <Input
              className="secondChildComponent"
              inputType="normal"
              titleText="<Input endIcon />"
              headerText="Label"
              footerText="Some interesting text"
              placeHolderText="Placeholder"
            />
          </div>
        </div>
        {/* Text Input Value */}
        <div className="singleItemRow">
          <Input
            inputType="normal"
            titleText="<Input value=”text” />"
            headerText="Label"
            placeHolderText="Text"
          />
        </div>
        {/* 2 inputs fields of different sizes */}
        <div className="twoItemsRow">
          <Input
            inputType="normal"
            titleText="<Input size=”sm” />"
            headerText="Label"
            placeHolderText="Placeholder"
            size="small"
          />
          <div className="secondChildComponent">
            <Input
              className="secondChildComponent"
              inputType="normal"
              titleText="<Input size=”md” />"
              headerText="Label"
              placeHolderText="Placeholder"
              size="large"
            />
          </div>
        </div>
        {/* Full width input */}
        <div className="singleItemRow">
          <Input
            inputType="normal"
            titleText="<Input fullWidth />"
            headerText="Label"
            placeHolderText="Text"
            size="fullwidth"
          />
        </div>
        {/* Multiple Row Input */}
        <div className="singleItemRow">
          <Input
            inputType="normal"
            titleText="<Input multiline row=”4” />"
            headerText="Label"
            placeHolderText="Text"
            size="multirow"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
