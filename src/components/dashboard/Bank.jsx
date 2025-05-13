"use client";

import KYCForm from "@/components/dashboard/KYC";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BankSection = () => {
  const router = useRouter();
  const [openBank, setOpenBank] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  const handleCheckboxChange = () => {
    setOpenBank((prev) => {
      const newState = !prev;
      if (!newState) {
        setIsNextButtonDisabled(true); // Reset when closing form
      }
      return newState;
    });
  };

  const handleBack = () => {
    router.push("/dashboard"); // Adjust as needed
  };

  const handleNext = () => {
    if (!isNextButtonDisabled) {
      router.push("/dashboard/confirmation");
    }
  };

  return (
    <div className="flex-1 p-4 sm:p-6 bg-gray-100 overflow-y-auto">
      <div className="w-ful mx-auto bg-white p-6 sm:p-8 rounded-3xl shadow-lg md:ml-[200px] md:w-[calc(100%-200px)]">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-green-600">
          Fund Withdrawal Options
        </h1>

        <div className="flex items-center justify-start mb-6">
          <input
            type="checkbox"
            id="bank-toggle"
            className="w-5 h-5 text-green-600 accent-green-500 focus:ring-green-500"
            checked={openBank}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="bank-toggle"
            className="ml-2 text-base sm:text-lg font-medium text-gray-800 cursor-pointer"
          >
            Bank Withdrawal
          </label>
        </div>

        {openBank && (
          <div className="mt-4">
            <KYCForm setIsNextButtonDisabled={setIsNextButtonDisabled} />
          </div>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
          <button
            type="button"
            onClick={handleBack}
            className="w-full sm:w-auto px-6 py-2 text-gray-700 font-semibold rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={isNextButtonDisabled}
            className={`w-full sm:w-auto px-6 py-2 text-white font-semibold rounded-md transition-colors ${
              isNextButtonDisabled
                ? "bg-green-400 cursor-not-allowed"
                : "bg-grgray-600 hover:bg-gray-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankSection;
