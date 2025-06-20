import React from "react";
import PdfUpload from "./PdfUpload";

const Banner = () => {
  return (
    <div
      className="hero rounded-md"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/m5k8kfFJ/quiz-digitizer-banner.png)",
      }}
    >
      <div className="hero-overlay rounded-md bg-black opacity-70"></div>
      <div className="hero-content text-neutral-content text-center flex flex-col ">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold ">
            Digitize Your Quizzes. Instantly.
          </h1>
          <p className="mb-5">
            Transform your PDF worksheets into interactive digital quizzes with
            ease. Our AI-powered platform extracts questions, options, and even
            diagrams, so you can build engaging online assessments in minutes.
          </p>
        </div>
        <section>
          <PdfUpload></PdfUpload>
        </section>
      </div>
    </div>
  );
};

export default Banner;
