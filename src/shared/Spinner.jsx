import React from "react";

const Spinner = () => {
  return (
    <div className="   flex items-center justify-center z-50">
      <div className="text-center p-8  rounded-xl  ">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent mb-4">
          <span className="sr-only">Uploading...</span>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-black">Processing PDF</h3>
      </div>
    </div>
  );
};

export default Spinner;
