import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex gap-3 mb-3">
      <Button title="All" />
      <Button title="News" />
      <Button title="Bhajan" />
      <Button title="Live" />
    </div>
  );
};

export default ButtonList;
