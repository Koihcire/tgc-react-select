import React from "react"
import ReactSelect from "./ReactSelectCreatable";
import ReactMultiSelect from "./ReactMultiSelect";

function App() {
  return (
    <React.Fragment>
      <h3>Creatable Multi Select</h3>
      <ReactSelect/>
      <h3>Multi Select</h3>
      <ReactMultiSelect/>
    </React.Fragment>
  )
}

export default App;
