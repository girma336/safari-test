"use client";

import { useRouter } from "next/navigation";
import React from "react";

// Example mock data – replace with Context or props if needed
const formData = {
  bankName: "Commercial Bank of Ethiopia",
  branchName: "OATtest1",
  accountName: "Test Test",
  accountNumber: "100034534534534",
  proofFileName: "bank_account_file.pdf",
};

const ConfirmationPage = () => {
  const router = useRouter();

  const handleSubmit = (status) => {
    console.log("Submitted as:", status);
    // You can POST to an API here
    alert(`Application saved as "${status}"`);
  };

  return (
    <div className="max-w-[80%] mx-auto p-6 mt-8">
      <h2 className="text-xl font-bold mb-4">FUND WITHDRAW OPTION</h2>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="font-bold">BANK NAME:</p>
            <p>{formData.bankName}</p>
            <p className="font-bold mt-4">ACCOUNT NUMBER:</p>
            <p>{formData.accountNumber}</p>
          </div>

          <div>
            <p className="font-bold">BANK BRANCH NAME:</p>
            <p>{formData.branchName}</p>
            <p className="font-bold mt-4">PROOF OF BANK ACCOUNT:</p>
            <a
              href="#"
              className="text-green-500 underline"
              onClick={(e) => e.preventDefault()}
            >
              BANK ACCOUNT FILE
            </a>
          </div>

          <div>
            <p className="font-bold">ACCOUNT NAME:</p>
            <p>{formData.accountName}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={() => router.back()}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={() => handleSubmit("Draft")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        >
          Save as Draft
        </button>
        <button
          onClick={() => handleSubmit("Submitted")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
