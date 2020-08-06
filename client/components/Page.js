import React from "react";

const Page = ({ children }) => {
  return (
    <div>
      <p>hey I'm the page component</p>
      {children}
    </div>
  );
};

export default Page;
