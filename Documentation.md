* This Markdown will documentate every function for future use: (View in GitHub or MD previewer)
```handleButtonClick() ``` :
*   `handleButtonClick` is a function that takes a `programId` as an argument. This `programId` is used to identify which program's visibility state should be toggled.
*   `setWindowStates` is a state updater function that comes from the `useState` hook. It's used to update the `windowStates` state, which is an object that keeps track of the visibility state of each program.
*   Inside `setWindowStates`, a function is passed that receives the previous state (`prevStates`). This is a common pattern when the new state depends on the previous state, and it helps to avoid potential issues with stale state in asynchronous operations [2](https://bobbyhadz.com/blog/react-onclick-show-component)[3](https://dev.to/paisndulaksara/how-to-use-the-usestate-hook-to-showhide-content-in-react-2k68).
*   The function returns a new object that spreads the previous state (`...prevStates`) to maintain the state of other programs that are not being toggled. Then, it updates the visibility state of the program with the given `programId` by negating its current value (`!prevStates[programId]`). This effectively toggles the visibility state from `true` to `false` or vice versa.
*   When this function is called with a `programId`, it will update the state such that the specified program's visibility is toggled, while the visibility of all other programs remains unchanged.

