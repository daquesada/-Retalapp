import React from "react";
import "./styles.css";
export const Button = ({
  onClick,
  text,
  disable = false,
}: {
  onClick: any;
  text: string;
  disable: boolean;
}) => {
  return (
    <button className="btn" onClick={onClick} disabled={disable}>
      {text}
    </button>
  );
};
