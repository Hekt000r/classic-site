import React, { useState } from "react";
import { Rnd } from "react-rnd";

function Notepad({ onClose }) {
  const [width, setWidth] = useState(320);
  const [height, setHeight] = useState(320);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to control dropdown visibility

  // Function to handle close button click
  const handleCloseButtonClick = () => {
    onClose();
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <Rnd
      size={{ width, height }}
      position={{ x, y }}
      onDragStop={(e, d) => {
        setX(d.x);
        setY(d.y);
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setWidth(ref.style.width);
        setHeight(ref.style.height);
        setX(position.x);
        setY(position.y);
      }}
      className="window"
    >
      <div className="window_title flex items-center justify-between">
        <button
          className="close_button border-solid border-2 pr-2 pl-2 bg-close_button"
          onClick={handleCloseButtonClick}
        >
          -
        </button>
        <h3 className="flex-grow">Notepad</h3>
      </div>
      <div className="border-solid border-2">
        <button className="mr-2 focus:bg-window_blue" onClick={toggleDropdown}>File</button>
        {dropdownVisible && (
          <div id="file_menu" className="absolute bg-close_button flex flex-1 flex-col">
            <button href="">Save</button> <button href="">Close</button>
          </div>
        )}
      </div>
      <textarea
        className="h-[80%] w-[100%]"
        name=""
        id=""
        cols="1"
        rows="1"
      ></textarea>
    </Rnd>
  );
}

export default Notepad;
