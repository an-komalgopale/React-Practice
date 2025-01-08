import React, { useEffect } from "react";
import { useState } from "react";

const ExampleOne = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  const handleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleClear = () => {
    setName("");
  };
  console.log("name: ", name);
  return (
    <div>
      <h1>Your name is: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};

export default ExampleOne;
