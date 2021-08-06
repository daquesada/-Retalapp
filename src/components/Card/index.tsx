import React from "react";
import "./styles.css";

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`container ${className}`}>{children}</div>;
};
