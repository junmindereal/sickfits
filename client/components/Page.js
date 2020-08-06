import React from "react";
import Header from "./Header";

const Page = ({ children }) => {
  return (
    <div className="page">
      <Header />
      {children}
    </div>
  );
};

export default Page;
