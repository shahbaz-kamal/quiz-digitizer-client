import React from "react";
import Banner from "../components/Banner";
import DigitizedData from "../components/DigitizedData";

const Home = () => {
  return (
    <div className="mt-5">
      <section className="">
        <Banner></Banner>
      </section>
      <section className="mt-5">
        <DigitizedData></DigitizedData>
      </section>
    </div>
  );
};

export default Home;
