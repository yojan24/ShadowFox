import React from "react";
import Home from "./page/Home";
import { Education, Skills, ContactForm, Project } from "./components";

function App() {
  return (
    <>
      <Home />
      <Project />
      <Skills />
      <Education />
      <ContactForm />
    </>
  );
}

export default App;
