import React from "react";

function LeftDescription({ translation }) {
  return (
    <p className="text-darkBlue sm:w-[80%] w-full lg:text-xl text-lg">
      {translation}
    </p>
  );
}

export default LeftDescription;
