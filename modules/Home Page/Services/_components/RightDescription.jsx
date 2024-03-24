import React from "react";

function RightDescription({ translation }) {
  return (
    <p className="sm:w-[90%] w-full m-auto sm:p-[2rem] py-5 px-3 text-center lg:text-lg text-base bg-white rounded-3xl text-darkBlue">
      {translation}
    </p>
  );
}

export default RightDescription;
