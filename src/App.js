import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import Todo from "./List";
import Background from "./Background";

function App() {
  const [isLight, setIsLight] = useState(true);
  const status = useSelector(state => state.theme.status);

  return (
    <div className='app' data-theme={status} >
      <Background/>
    </div>
  );
}

export default App;
