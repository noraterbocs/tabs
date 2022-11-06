import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loading = () => {
  return (
    <section className="loading">
      <h1>
        <ThreeCircles
          height="100"
          width="100"
          color="black"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </h1>
    </section>
  );
};

export default Loading;
