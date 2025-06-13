import Banner from "../components/Banner";
import DigitizedData from "../components/DigitizedData";
import useAuth from "../Hooks/useAuth";

const Home = () => {
  const { allQuestion,showJSONData } = useAuth();
  console.log(allQuestion);
  return (
    <div className="mt-5">
      <section className="">
        <Banner></Banner>
      </section>
      {allQuestion && allQuestion.length > 0 && showJSONData && (
        <section className="mt-5">
          <DigitizedData></DigitizedData>
        </section>
      )}
    </div>
  );
};

export default Home;
