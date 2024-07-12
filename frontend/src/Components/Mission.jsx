import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <div class="grid grid-cols-2 ">
      <div
        className="div1 p-5 gap-4"
        style={{ backgroundColor: "whitesmoke", paddingLeft: "100px" }}
      >
        <h1
          className="font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  mb-4"
        >
          Our Mission
        </h1>
        <img
          className="border-8 border-white"
          src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ width: "30vw" }}
        ></img>
        <h4 className="font-semibold text-xl">Our Investment Principles</h4>
        <p className="text-body-color">
          Our goal is to maximize investor return and minimize any potential
          loss by applying these principles in a disciplined and pragmatic
          process. We rely on facts, not speculation to purchase high return,
          predictable companies at significant discounts to intrinsic values.
        </p>
      </div>
      <div
        className="div1 p-5 gap-5 background-image border-8 p-5 opacity-70"
        style={{ backgroundColor: "rgb(31 41 55)", paddingRight: "100px" }}
      >
        <h1
          className="font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  mb-4"
        >
          Benefits & Risks
        </h1>
        <h4 className="font-semibold text-xl">Advantages of managed funds</h4>
        <p className="text-body-color mb-3">
          The benefits of using managed funds include the ability to gain
          exposure to different asset classes and market sectors.
        </p>
        <p>
          <i class="fas fa-check-circle text-green-500"></i> Diversification
        </p>
        <p>
          <i class="fas fa-check-circle text-green-500"></i> Potential wealth
          generation
        </p>
        <p>
          <i class="fas fa-check-circle text-green-500"></i> Cost-effective
          investment
        </p>
        <p>
          <i class="fas fa-check-circle text-green-500"></i> Access to a range
          of assets
        </p>
        <p>
          <i class="fas fa-check-circle text-green-500"></i> Geared exposure
        </p>
        <p>
          <i class="fas fa-check-circle text-green-500"></i> Underperforming
          investments
        </p>

        <button
          class="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600"
          style={{ width: "20vw" }}
        >
          Make an Appointment &gt;
        </button>
      </div>
    </div>
  );
};

export default Mission;
