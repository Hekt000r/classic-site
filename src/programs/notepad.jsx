import React, { useState } from "react";
import { Rnd } from "react-rnd";

function Notepad({ onClose }) {
  const [text, setText] = useState("");
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(320);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const textFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "note.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setText(e.target.result);
    };

    reader.readAsText(file);
  };

  const handleCloseButtonClick = () => {
    onClose();
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleFileSave = () => {
    localStorage.setItem("text", JSON.stringify(text));
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
      dragHandleClassName="drag-handle" // This is the new prop
    >
      <div className="window_title flex items-center justify-between drag-handle">
        <button
          className="close_button border-solid border-2 pr-2 pl-2 bg-close_button"
          onClick={handleCloseButtonClick}
        >
          -
        </button>
        <h3 className="flex-grow">Notepad</h3>
      </div>
      <div className="border-solid border-2">
        <button
          className={`mr-2 w-16 ${dropdownVisible ? "bg-window_blue text-close_button" : ""}`}
          onClick={toggleDropdown}
        >
          File
        </button>
        {dropdownVisible && (
          <div
            id="file_menu"
            className="absolute border-solid border-2 border-b-outline_black flex flex-1 flex-col w-16 text-center"
          >
            <button className="hover:bg-window_blue hover:text-close_button" onClick={textFile}>Save</button>
            <label htmlFor="file-input" className="cursor-pointer hover:bg-window_blue hover:text-close_button">Open</label>
            <input
              id="file-input"
              type="file"
              accept=".txt"
              onChange={handleFileInputChange}
              style={{ display: 'none' }}
            />
          </div>
        )}
      </div>
      <textarea
        className="h-[80%] w-[100%]"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </Rnd>
  );
}

export default Notepad;
