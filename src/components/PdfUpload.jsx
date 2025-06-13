import React, { useState } from "react";
import { TbFileUpload } from "react-icons/tb";
import Spinner from "../shared/Spinner";
import useAuth from "../Hooks/useAuth";

import useAxiosPublic from "../Hooks/useAxiosPublic";

const PdfUpload = () => {
  const { uploading, setUploading, refetch, showJSONData, setShowJSONData } =
    useAuth();
  const [pdfFile, setPdfFile] = useState(null);
  const axiosPublic = useAxiosPublic();

  //   pdf file capturing by the input

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type === "application/pdf") {
      setPdfFile(selectedFile);
    } else {
      setPdfFile(null);
      alert("Please select a valid PDF file");
    }
  };

  const handleFileSubmit = async (e) => {
    e.preventDefault();
    if (!pdfFile) {
      alert("Please select a PDF file before submitting.");
      return;
    }
    setUploading(true);
    setShowJSONData(false);
    const formData = new FormData();
    formData.append("pdf", pdfFile);
    try {
      const res = await axiosPublic.post("digitalize/process-pdf", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.data) {
        setUploading(false);
        await refetch();
        setShowJSONData(true);
      }
      console.log(res.data);
    } catch (error) {
      console.error("Error uploading PDF:", error);
      setUploading(false);
      setShowJSONData(false);
      alert("Failed to upload PDF. Please try again.");
    }
  };

  return (
    <div className="border-2 border-dashed border-orange-600 rounded-lg p-8 text-center transition-all  hover:bg-base-100 w-xl bg-base-300 hover:border-orange-400 group  ease-in-out duration-300">
      <div className="flex justify-center mb-4 text-orange-600 group-hover:text-orange-400 transition ease-in-out duration-300">
        <TbFileUpload size={30} />
      </div>
      {!uploading && (
        <div>
          <p className="mb-4 font-medium text-black text-xl ">
            Chose your PDF to digitize
          </p>{" "}
          <form onSubmit={handleFileSubmit} className="" action="">
            <input
              onChange={handleFileChange}
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
        </div>
      )}

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
