import React, { useState } from "react";
import { RiUserSettingsFill } from "react-icons/ri";
import axios from "axios";

const Fin_input = () => {
  const [annualIncome, setAnnualIncome] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "annualIncome") {
      setAnnualIncome(value);
    } else if (name === "creditScore") {
      setCreditScore(value);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/predict", {
        annual_income: annualIncome,
        credit_score: creditScore,
      });
      setPrediction(response.data.predicted_investment);
    } catch (error) {
      console.error("Error fetching the prediction:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Give the input for the stock recommendation
                </div>
              </div>

              <div className="mx-auto max-w-xs">
                <input
                  name="annualIncome"
                  value={annualIncome}
                  onChange={handleInputChange}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="number"
                  placeholder="Enter Annual income"
                />
                <input
                  name="creditScore"
                  value={creditScore}
                  onChange={handleInputChange}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="number"
                  placeholder="Enter credit score"
                />
                <button
                  onClick={handleSubmit}
                  className="mt-5 tracking-wide font-semibold bg-green-400 text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <RiUserSettingsFill />
                  <span className="ml-3">Give recommendation</span>
                </button>
                {prediction !== null && (
                  <div className="mt-6 text-lg text-gray-600 text-center">
                    Predicted Investment: Rs. {prediction}
                  </div>
                )}
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by Cartesian Kinetics
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Terms of Service
                  </a>
                  and its
                  <a
                    href="#"
                    className="border-b border-gray-500 border-dotted"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Fin_input;
