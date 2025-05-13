"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function KYCForm({ setIsNextButtonDisabled }) {
  const router = useRouter();

  const [bankName, setBankName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [proofFile, setProofFile] = useState(null);

  const [errors, setErrors] = useState({});

  // Sample Bank and Branch Options
  const bankNames = [
    "Wegagen Bank",
    "Cooperative Bank of Oromia",
    "Awash International Bank",
    "Dashen Bank",
    "Commercial Bank of Ethiopia",
  ];

  const branchNames = ["Branch 1", "Branch 2", "Branch 3"];

  const validateForm = () => {
    const newErrors = {};
    const accountNumberRegex = /^\d+$/;

    if (!bankName) newErrors.bankName = "Bank name is required";
    if (!branchName) newErrors.branchName = "Branch name is required";
    if (!accountName) newErrors.accountName = "Account name is required";
    if (!accountNumber || !accountNumberRegex.test(accountNumber))
      newErrors.accountNumber = "Account number should be numeric";
    if (!proofFile) newErrors.proofFile = "Proof of bank account is required";

    setErrors(newErrors);
    setIsNextButtonDisabled(Object.keys(newErrors).length > 0);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "application/pdf" || file.type.includes("image"))
    ) {
      setProofFile(file);
    } else {
      setProofFile(null);
      setErrors((prevErrors) => ({
        ...prevErrors,
        proofFile: "Invalid file format. Only PDF, PNG, JPG are allowed.",
      }));
    }
  };

  const handleNext = () => {
    router.push("/confirmation"); // Redirect to the confirmation page
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-3xl font-bold mb-4">KYC Form</h2>
      <form
        className=" w-full  grid grid-cols-4 relative gap-4 "
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Bank Name */}
        <div>
          <label
            className="block text-sm font-semibold text-gray-700"
            htmlFor="bankName"
          >
            Bank Name
          </label>
          <select
            id="bankName"
            name="bankName"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            onBlur={validateForm}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a bank</option>
            {bankNames.map((bank, index) => (
              <option key={index} value={bank}>
                {bank}
              </option>
            ))}
          </select>
          {errors.bankName && (
            <p className="text-xs text-red-600">{errors.bankName}</p>
          )}
        </div>

        {/* Branch Name */}
        <div>
          <label
            className="block text-sm font-semibold text-gray-700"
            htmlFor="branchName"
          >
            Branch Name
          </label>
          <select
            id="branchName"
            name="branchName"
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            onBlur={validateForm}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a branch</option>
            {branchNames.map((branch, index) => (
              <option key={index} value={branch}>
                {branch}
              </option>
            ))}
          </select>
          {errors.branchName && (
            <p className="text-xs text-red-600">{errors.branchName}</p>
          )}
        </div>

        {/* Account Name */}
        <div>
          <label
            className="block text-sm font-semibold text-gray-700"
            htmlFor="accountName"
          >
            Account Name
          </label>
          <input
            type="text"
            id="accountName"
            name="accountName"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            onBlur={validateForm}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter account name"
          />
          {errors.accountName && (
            <p className="text-xs text-red-600">{errors.accountName}</p>
          )}
        </div>

        {/* Account Number */}
        <div>
          <label
            className="block text-sm font-semibold text-gray-700"
            htmlFor="accountNumber"
          >
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            onBlur={validateForm}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter account number"
          />
          {errors.accountNumber && (
            <p className="text-xs text-red-600">{errors.accountNumber}</p>
          )}
        </div>

        {/* Proof of Bank Account */}
        <div>
          <label
            className="block text-sm font-semibold text-gray-700"
            htmlFor="proofFile"
          >
            Proof of Bank Account
          </label>
          <input
            type="file"
            id="proofFile"
            name="proofFile"
            accept=".pdf,.png,.jpg"
            onChange={handleFileChange}
            onBlur={validateForm}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {errors.proofFile && (
            <p className="text-xs text-red-600">{errors.proofFile}</p>
          )}
        </div>
      </form>
    </div>
  );
}
