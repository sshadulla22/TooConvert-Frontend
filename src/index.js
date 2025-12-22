import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

function Root() {
 

  return (
    <>
    <BrowserRouter>
        <App />
    </BrowserRouter>

    </>
   
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
