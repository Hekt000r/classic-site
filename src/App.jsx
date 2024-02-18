import React, { useState } from "react";
import { Rnd } from "react-rnd";
import Notepad from "./programs/notepad"; // Ensure the path is correct

function App() {
  // State to control Window visibility for each program
  const [windowStates, setWindowStates] = useState({
    1: true, // Program Manager
    2: false, // Notepad
    // Add more initial states as needed
  });

  // State for the Program Manager's window size and position
  const [width, setWidth] = useState(320);
  const [height, setHeight] = useState(200);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // Function to handle button click for a specific program
  const handleButtonClick = (programId) => {
    setWindowStates((prevStates) => ({
      ...prevStates,
      [programId]: !prevStates[programId], // Toggle visibility
    }));
  };

  // Function to close a specific program
  const handleProgramClose = (programId) => {
    setWindowStates((prevStates) => ({
      ...prevStates,
      [programId]: false, // Set visibility to false
    }));
  };

  // Rendering logic for Program Manager
  const programManager = (
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
      dragHandleClassName="drag-handle"
    >
      <div className="window_title flex items-center justify-between drag-handle">
        <button
          className="close_button border-solid border-2 pr-2 pl-2 bg-close_button"
          onClick={() => handleProgramClose(1)} // Close Program Manager
        >
          -
        </button>
        <h3 className="flex-grow">Program Manager</h3>
      </div>

      <button className="notepad_button" onClick={() => handleButtonClick(2)}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Notepad_Windows_3.svg"
          className="h-8 w-8"
          alt="Notepad Icon"
        />
        <p>Notepad</p>
      </button>
    </Rnd>
  );

  // Rendering logic for Notepad
  const notepad = <Notepad onClose={() => handleProgramClose(2)} />;

  return (
    <>
      {windowStates[1] && programManager}
      {windowStates[2] && notepad}
      {/* Render other programs based on their visibility state */}
    </>
  );
}

export default App;
