import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import { CoursePart } from "./types";
import Total from "./components/Total";
import Content from "./components/Content";

const App: React.FC = () => {
  const courseName = "Half Stack application development";
  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
      <div>
          <Header name={courseName}/>
        <Content courseParts={courseParts}/>
        <Total courseParts={courseParts}/>
      </div>
  );
};

export default App