import React, { useState } from "react";
import { TbFileUpload } from "react-icons/tb";
import Spinner from "../shared/Spinner";

const PdfUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);

//   pdf file capturing by the input

const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setPdfFile(selectedFile);
      console.log("PDF selected:", selectedFile.name);
    } else {
      setPdfFile(null);
      alert("Please select a valid PDF file");
    }
  };
  
  console.log(pdfFile)
  return (
    <div className="border-2 border-dashed border-orange-600 rounded-lg p-8 text-center transition-all  hover:bg-base-100 w-xl bg-base-300 hover:border-orange-400 group  ease-in-out duration-300">
      <div className="flex justify-center mb-4 text-orange-600 group-hover:text-orange-400 transition ease-in-out duration-300">
        <TbFileUpload size={30} />
      </div>
      <p className="mb-2 font-medium text-black text-xl">
        Drag & drop your PDF here to digitize
      </p>
      <p className="text-sm text-base-content/50 mb-4">or</p>

      <form className="" action="">
        <input onChange={handleFileChange}
          type="file"
          className="file-input bg-orange-600 hover:bg-orange-300 hover:text-black transition ease-in-out duration-300"
        />
        <button
          type="submit"
          className="btn bg-orange-600  text-white hover:bg-orange-400 hover:text-black text-xl transition ease-in-out duration-300"
        >
          Submit
        </button>
      </form>
      {/* <input type="file" id="pdf-upload" className="hidden" accept=".pdf" /> */}
      {/* <label
        htmlFor="pdf-upload"
        className="btn bg-orange-600  text-white hover:bg-orange-400 hover:text-black text-xl"
      ></label> */}

      {/* spinner */}
      {uploading === true && (
        <div>
          <Spinner></Spinner>
        </div>
      )}
    </div>
  );
};

export default PdfUpload;
