
import axios from "axios";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddData = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    nid: "",
    dob: "",
    fatherName: "",
    motherName: "",
    rollNumber: "",
    program: "",
    session: "",
    passingYear: "",
    cgpa: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData)
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/records`, formData);
      console.log("Record added successfully:", response.data);
      toast("Record added successfully!");
      navigate('/admindashbord')

      setFormData({ // Reset form data
        name: "",
        nid: "",
        dob: "",
        fatherName: "",
        motherName: "",
        rollNumber: "",
        program: "",
        session: "",
        passingYear: "",
        cgpa: "",
      });
    } catch (error) {
      console.error("Error adding record:", error);
      alert("Failed to add record. Please try again.");
    }
  };

  return (
    <div className="max-w-screen-lg dark:bg-[#420878] dark:text-gray-500  mx-auto p-5 bg-purple-300 ">
       <div className="flex justify-between items-center">
   <h2 className="text-2xl font-bold dark:text-white mb-4">Add Record Record</h2>  <NavLink to='/admindashbord'
          
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
         Dashbord
        </NavLink>
   </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input fields for each property */}
        <div>
          <label className="block dark:text-white  text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block dark:text-white  text-sm font-medium text-gray-700">NID:</label>
          <input
            type="text"
            name="nid"
            value={formData.nid}
            onChange={handleChange}
            className="input   input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block  dark:text-white  text-sm font-medium text-gray-700">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block  dark:text-white text-sm font-medium text-gray-700">Father's Name:</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block  dark:text-white text-sm font-medium text-gray-700">Mother's Name:</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block dark:text-white  text-sm font-medium text-gray-700">Roll Number:</label>
          <input
            type="text"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block dark:text-white  text-sm font-medium text-gray-700">Program:</label>
          <input
            type="text"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block dark:text-white  text-sm font-medium text-gray-700">Session:</label>
          <input
            type="text"
            name="session"
            value={formData.session}
            onChange={handleChange}
            className="input   input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block dark:text-white  text-sm font-medium text-gray-700">Passing Year:</label>
          <input
            type="text"
            name="passingYear"
            value={formData.passingYear}
            onChange={handleChange}
            className="input  input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block dark:text-white  text-sm font-medium text-gray-700">CGPA:</label>
          <input
            type="number"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleChange}
            className="input  input-bordered w-full"
            required
          />
        </div>

        {/* Submit button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Record
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddData;