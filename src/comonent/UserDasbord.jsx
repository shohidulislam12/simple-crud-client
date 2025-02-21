import { useState } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [roll, setRoll] = useState("");
  const [year, setYear] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!roll || !year) {
      setError("Please enter roll number and passing year.");
      return;
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user?roll=${roll}&year=${year}`
      );

      if (response.data) {
        setUserData(response.data);
        setError("");
      } else {
        setUserData(null);
        setError("Sorry, no data found.");
      }
    } catch (err) {
      setUserData(null);
      setError("Sorry, no data found.");
    }
  };
console.log(userData)
  return (
    <div className="max-w-screen-lg mx-auto p-5 min-h-screen flex flex-col items-center bg-purple-300 dark:bg-[#420878] dark:text-white">
      {/* Search Field */}
      <div className="w-full max-w-2xl flex flex-col md:flex-row gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Enter Roll Number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
        />
        <input
          type="text"
          placeholder="Enter Passing Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

     {/* Display Results */}
<div className="mt-5 w-full max-w-3xl p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
  {error && <p className="text-red-500 text-center">{error}</p>}

  {userData ? (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600 dark:text-indigo-400">
        User Information
      </h2>
      <div className="space-y-4">
        {/* Row 1: Name */}
        <div className="flex flex-row items-center">
          <div className="w-1/3 font-semibold text-gray-700 dark:text-gray-300">
            Name:
          </div>
          <div className="w-2/3 text-gray-900 dark:text-gray-100">
            {userData.name}
          </div>
        </div>
        {/* Row 2: NID */}
        <div className="flex flex-row items-center">
          <div className="w-1/3 font-semibold text-gray-700 dark:text-gray-300">
            NID:
          </div>
          <div className="w-2/3 text-gray-900 dark:text-gray-100">
            {userData.nid}
          </div>
        </div>
        {/* Row 3: Date of Birth */}
        <div className="flex flex-row items-center">
          <div className="w-1/3 font-semibold text-gray-700 dark:text-gray-300">
            Date of Birth:
          </div>
          <div className="w-2/3 text-gray-900 dark:text-gray-100">
            {userData.dob}
          </div>
        </div>
        {/* Row 4: Father's Name */}
        <div className="flex flex-row items-center">
          <div className="w-1/3 font-semibold text-gray-700 dark:text-gray-300">
            Father's Name:
          </div>
          <div className="w-2/3 text-gray-900 dark:text-gray-100">
            {userData.fatherName}
          </div>
        </div>
        {/* Row 5: Mother's Name */}
        <div className="flex flex-row items-center">
          <div className="w-1/3 font-semibold text-gray-700 dark:text-gray-300">
            Mother's Name:
          </div>
          <div className="w-2/3 text-gray-900 dark:text-gray-100">
            {userData.motherName}
          </div>
        </div>
        {/* Row 6: Roll Number */}
        <div className="flex flex-row items-center">
          <div className="w-1/3 font-semibold text-gray-700 dark:text-gray-300">
            Roll Number:
          </div>
          <div className="w-2/3 text-gray-900 dark:text-gray-100">
            {userData.rollNumber}
          </div>
        </div>
        {/* Row 7: Program */}
        <div className="flex flex-row items-center">
          <div className="w-1/3 font-semibold text-gray-700 dark:text-gray-300">
            Program:
          </div>
          <div className="w-2/3 text-gray-900 dark:text-gray-100">
            {userData.program}
          </div>
        </div>
        {/* Row 8: Session */}
        <div className="flex flex-row items-center">
          <div className="w-1/3 font-semibold text-gray-700 dark:text-gray-300">
            Session:
          </div>
          <div className="w-2/3 text-gray-900 dark:text-gray-100">
            {userData.session}
          </div>
        </div>
        {/* Row 9: Passing Year */}
        <div className="flex flex-row items-center">
          <div className="w-1/3 font-semibold text-gray-700 dark:text-gray-300">
            Passing Year:
          </div>
          <div className="w-2/3 text-gray-900 dark:text-gray-100">
            {userData.passingYear}
          </div>
        </div>
        {/* Row 10: CGPA */}
        <div className="flex flex-row items-center">
          <div className="w-1/3 font-semibold text-gray-700 dark:text-gray-300">
            CGPA:
          </div>
          <div className="w-2/3 text-gray-900 dark:text-gray-100">
            {userData.cgpa}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p className="text-center text-gray-500 dark:text-gray-400">
      No user data available.
    </p>
  )}
</div>

    </div>
  );
};

export default UserDashboard;
