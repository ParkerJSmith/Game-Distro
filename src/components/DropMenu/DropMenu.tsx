import React from "react";
import dropimg from "../../images/dop_down.png";
import "./DropMenu.scss";

export default function DropMenu(props: {
  name: string;
  options: string[];
  setOptionFunction: any;
}) {
  const [isDropdownShown, setIsDropdownShown] = React.useState(false);
  const [isFocus, setIsFocus] = React.useState(false);

  function toggleDropdown() {
    if (isDropdownShown) {
      setIsDropdownShown(false);
    } else {
      setIsDropdownShown(true);
    }
  }

  function closeDropdown() {
    setIsDropdownShown(false);
    setIsFocus(false);
  }

  function setFocus() {
    setIsFocus(true);
  }

  function focusOff() {
    setIsFocus(false);
  }

  function setOption(option: string) {
    props.setOptionFunction(option);
    closeDropdown();
  }

  return (
    <div className="dropdown-menu">
      <div className="button-container">
        {isFocus ? (
          <button
            className="dropdown-button in-focus"
            onClick={toggleDropdown}
            onMouseLeave={focusOff}
          >
            {props.name}
            <img src={dropimg} alt="" />
          </button>
        ) : (
          <button
            className="dropdown-button"
            onClick={toggleDropdown}
            onMouseEnter={setFocus}
          >
            {props.name}
            <img src={dropimg} alt="" />
          </button>
        )}
      </div>
      {isDropdownShown === true && (
        <div
          className="dropdown-content"
          onMouseLeave={closeDropdown}
          onMouseEnter={setFocus}
        >
          {props.options.map((option) => (
            <div
              className="dropdown-item"
              onClick={setOption.bind(null, option)}
            >
              <p>{option}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
