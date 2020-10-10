import React from "react";
import NewNote from "./NewNote";
import Notes from "./Notes";
import VisibilityFilter from "./VisibilityFilter";

const App = () => {
  const filterSelected = (value) => {
    console.log(value);
  };

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
