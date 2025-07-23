import React from "react";
import Loader from "../components/Loader";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <Loader />
    </div>
  );
};

export default loading;
